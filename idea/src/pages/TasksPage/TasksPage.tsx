import * as S from "./TasksPage.style.js";
import React, {FC, useEffect} from "react";
import { Header, PartTask } from "../../components/index.ts";
import { partData } from "./TasksPage.config.ts";
import { tasksAsync } from "../../redux/tasks/tasksSlice.ts";
import { useAppDispatch } from "../../hooks/useDispatch.ts";
import { tasksInitial } from "../../utils/damiData.ts";

export const TasksPage: FC = ()=> {
	const dispatch = useAppDispatch();

	useEffect(()=> {
		if(!localStorage.getItem("data")){
			localStorage.setItem("data", JSON.stringify(tasksInitial));
		}
  }, [])

	useEffect(()=> {		
    dispatch(tasksAsync(''));
  }, [])

	return(
		<S.ListTasksComp>
			<Header />
			<S.PartsList>
				{partData.map((item)=> {
					return (
						<PartTask
							key={item.partName}
							partName={item.partName}
							title={item.title}
							iconWithTitle={item.iconWithTitle}
							icon={item.icon}
							addItem={item.addItem}
						/>
					)
				})}
			</S.PartsList>
		</S.ListTasksComp>
	)
}