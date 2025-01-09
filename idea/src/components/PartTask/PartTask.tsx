import * as S from './PartTask.style';
import React, { JSX, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store.ts';
import { useAppDispatch } from '../../hooks/useDispatch.ts';
import { deleteAllDone, deleteTask, dragTask } from '../../redux/tasks/tasksSlice.ts';
import { partTaskTypes, tasksItems } from '../../pages/TasksPage/TasksPage.config.ts';
import { NewTaskType } from '../NewTask/NewTask.tsx';
import { NewTask, Taskitem } from '../index.ts';

export const PartTask = ({
  partName,
  title,
  icon,
  iconWithTitle,
  addItem
}: partTaskTypes): JSX.Element=> {
  const dispatch = useAppDispatch();
  const tasksData = useSelector((state: RootState) => state.tasks.value);
  const [newTask, setNewTask] = useState<NewTaskType | null>(null);

  const createNewTask = ()=> {
    setNewTask({
      id: tasksData.latestId + 1,
      startDay: 0,
      endDay: 0,
      text: '',
      setNewTask
    });
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const draggedItem = e.dataTransfer.getData("text/plain");
    const [draggedId, draggedPartName] = draggedItem.split("-");
    if(draggedId && draggedPartName){
      if(e.currentTarget.id === 'delete_idon'){
        dispatch(deleteTask({ id: Number(draggedId), fromPart: draggedPartName }));
      }
      else{
        dispatch(dragTask({ id: Number(draggedId), fromPart: draggedPartName, toPart: partName }));
      }
    }
  };

  const sortedData: tasksItems[] = useMemo(() => {
    return [...tasksData[partName]].sort((a, b) => a.startDay - b.startDay);
  }, [tasksData, partName]);

	return(
		<S.PartTaskCont>
      <S.PartTaskHeader>
        <S.IconWithText>
          <img src={iconWithTitle} alt="Part" />
          <h3>{title}</h3>
        </S.IconWithText>
        {icon &&
          <S.DeleteItem
            onDragOver={handleDragOver}
            id='delete_idon'
            onDrop={handleDrop}
            onClick={()=> { dispatch(deleteAllDone())} }
          >
            <img src={icon} alt="Delete" />  
          </S.DeleteItem>
        }
        {addItem && <S.AddItem onClick={createNewTask}>{addItem}</S.AddItem>}
      </S.PartTaskHeader>
      <S.PartTaskList onDragOver={handleDragOver} onDrop={handleDrop}>
        { newTask &&
          <NewTask
            id={newTask.id}
            setNewTask={setNewTask}
            startDay={newTask.startDay}
            endDay={newTask.endDay}
            text={newTask.text}
          />
        }
        {
          sortedData.map((item)=> {
            return (
              <Taskitem
                key={item.id}
                id={item.id}
                startDay={item.startDay}
                endDay={item.endDay}
                text={item.text}
                editedId={newTask?.id}
                setNewTask={partName === 'todo'? setNewTask : undefined}
                partName={partName}
              />
            )
          })
        }
      </S.PartTaskList>
		</S.PartTaskCont>
	)
}