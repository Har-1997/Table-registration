import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTasksList } from "./tasksApi.ts";
import { tasksItems } from "../../pages/TasksPage/TasksPage.config.ts";
import { tasksGroups } from "../../utils/Interfaces.ts";

const updateLocalData = (newData: tasksItems[]) => {
  try {
    localStorage.setItem("data", JSON.stringify(newData));
  } catch (error) {
    console.error("Error updating localStorage:", error);
  }
};

const data: tasksGroups = {
	todo: [],
	in_progress: [],
	review: [],
	done: [],
	latestId: 0
}

const initialState = {
	value: data,
	status: 'idle',
}

export const tasksAsync = createAsyncThunk(
	'tasks/fetch',
	async (text: string) => {				
		return await fetchTasksList(text);
	}
);

const TasksStore = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addOrEditTask: (state, action) => {
			const { data, isEdit } = action.payload;

			// get to localStorage
			const allData = localStorage.getItem("data");
      const localData: tasksItems[] = allData ? JSON.parse(allData) : [];

			if(isEdit){
				// Edit task logic
				const index: number = state.value.todo.findIndex((item) => item.id === data.id);
				state.value.todo[index] = data;

				const indexLocalStr: number = localData.findIndex((item) => item.id === data.id);
				if(indexLocalStr) localData[indexLocalStr] = data;
			}
			else{
				// Add task logic
				state.value.todo.push(data);
				state.value.latestId += 1;

				localData.push(data);
			}

			updateLocalData(localData);
		},
		dragTask: (state, action) => {
			const { id, fromPart, toPart } = action.payload;

			const dropItem = state.value[fromPart].find((item) => item.id === id);			
			if (dropItem) {
				state.value[fromPart] = state.value[fromPart].filter((item) => item.id !== id);
				dropItem.type = toPart;
				state.value[toPart].push(dropItem);

				// save to localStorage
				const dataLocalStr: string | null = localStorage.getItem("data");
				if(dataLocalStr) {
					const newLocalStrData: Array<tasksItems> = JSON.parse(dataLocalStr).map((item) => {
						if(item.id === id) item.type = toPart;
						return item;
					});
	
					updateLocalData(newLocalStrData);
				}
			}
		},
		deleteTask: (state, action) => {
			const { id, fromPart } = action.payload;
			state.value[fromPart] = state.value[fromPart].filter((item)=> item.id !== id);

			// delete from local storage
			const allData = localStorage.getItem("data");
      const localData = allData ? JSON.parse(allData) : [];
      const updatedLocalData = localData.filter((task) => task.id !== id);

      updateLocalData(updatedLocalData);
		},
		deleteAllDone: (state)=> {
			state.value.done = [];

			// delete all done from local storage
			const dataLocalStr = localStorage.getItem("data");
      const allLocalData: tasksItems[] = dataLocalStr ? JSON.parse(dataLocalStr) : [];
      const updatedData = allLocalData.filter((item) => item.type !== "done");
      updateLocalData(updatedData);
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(tasksAsync.pending, (state) => {
					state.status = 'loading';
			})
			.addCase(tasksAsync.fulfilled, (state, action) => {
				state.status = 'idle';

				// add inital dami data
				state.value = action.payload;
			})
			.addCase(tasksAsync.rejected, (state) => {
					state.status = 'failed';
			});
	},
})

export const {
	addOrEditTask,
	dragTask,
	deleteTask,
	deleteAllDone
} = TasksStore.actions;

export default TasksStore.reducer;