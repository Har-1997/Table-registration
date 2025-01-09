import * as S from "./TaskItem.style";
import React from "react";
import EditIcon from "../../pictures/edit.png";
import { timestampToDate } from "../../utils/functions";
import { dateType, TaskMainTypes } from "../../utils/Interfaces";

export interface TaskPropsTypes extends TaskMainTypes {
	setNewTask?: Function;
	editedId?: number;
	partName?: string;
}

export const Taskitem = ({id, startDay, endDay, text, editedId, setNewTask, partName}: TaskPropsTypes)=> {
	if(id === editedId) return null;

	const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
		e.dataTransfer.setData("text/plain", `${id}-${partName}`);
	};

	// Convert timestamps to readable dates
	const startDayText: dateType = timestampToDate(startDay);
	const endDayText: dateType = timestampToDate(endDay);

	const nowDate = new Date().toISOString().split('T')[0];
	const finishDay = new Date(`${startDayText.year}-${startDayText.month}-${startDayText.day}`).toISOString().split('T')[0];

	const formatDate = ({ year, month, day }: dateType): string => `${day}.${month}.${year}`;

	return(
		<S.TaskItemCont draggable onDragStart={(e) => handleDragStart(e)}>
			<S.Sections>
				<span className="item-title">Начало:</span>
				<span className="item-value">{formatDate(startDayText)}</span>
			</S.Sections>
			<S.Sections>
				<span className="item-title">Окончание:</span>
				<span
					className={`item-value ${partName !== 'done' && nowDate > finishDay && 'late'}`}
				>	
					{formatDate(endDayText)}
				</span>
			</S.Sections>
			<S.Sections>
				<span className="item-title">Описание:</span>
				<span className="item-value">{text}</span>
			</S.Sections>
			<S.EditDataCont>
				{setNewTask && <S.EditIcon src={EditIcon} onClick={()=> setNewTask({id, startDay, endDay, text})} />}
			</S.EditDataCont>
		</S.TaskItemCont>
	)
}