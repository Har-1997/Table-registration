import * as S from "./NewTask.style";
import CancleIcon from "../../pictures/cross.png";
import CheckIcon from "../../pictures/check.png";
import React, { JSX, useState, useEffect } from "react";
import { useAppDispatch } from "../../hooks/useDispatch.ts";
import { addOrEditTask } from "../../redux/tasks/tasksSlice.ts";
import { timestampToDate } from "../../utils/functions.js";
import { dateType, TaskMainTypes } from "../../utils/Interfaces.ts";

export interface NewTaskType extends TaskMainTypes {
	setNewTask: (task: null) => void;
}

export const NewTask = ({id, startDay, endDay, text, setNewTask}: NewTaskType): JSX.Element=> {  
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    begin: "",
    end: "",
    textData: "",
  });

  useEffect(() => {
    const startDateObj: dateType = timestampToDate(startDay);
    const endDateObj: dateType = timestampToDate(endDay);
    if(startDay && endDateObj) {
      setFormData({
        begin: `${startDateObj.year}-${startDateObj.month}-${startDateObj.day}`,
        end: `${endDateObj.year}-${endDateObj.month}-${endDateObj.day}`,
        textData: text,
      });
    }
  }, [startDay, endDay, text]);

  // Update form data
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const editOrAddTask = (): void => {
    const { begin, end, textData } = formData;

    if(begin && end && textData){
      if (new Date(begin) > new Date(end)) {
        alert("Start date cannot be later than end date.");
        return;
      }

      dispatch(addOrEditTask({
        data: {
          id,
          startDay: (new Date(begin)).getTime(),
          endDay: (new Date(end)).getTime(),
          text: textData,
          type: 'todo'
        },
        isEdit: !!startDay
      }));

      setNewTask(null);
    }
  }

  const cancelTask = (): void => {
    setNewTask(null);
  }

	return(
		<S.NewTaskComp>
      <S.Sections>
          <span className="item-title">Начало:</span>
          <input
            className="chose-value"
            type="date"
            value={formData.begin || ""}
            onChange={(e)=> handleInputChange("begin", e.target.value)}
            aria-label="Task start date"
          />
        </S.Sections>
        <S.Sections>
          <span className="item-title">Окончание:</span>
          <input
            className="chose-value"
            type="date"
            value={formData.end}
            onChange={(e) => handleInputChange("end", e.target.value)}
            aria-label="Task end date"
          />
        </S.Sections>
        <S.Sections>
          <span className="item-title">Описание:</span>
          <input
            className="chose-value"
            type="text"
            value={formData.textData || ''}
            onChange={(e) => handleInputChange("textData", e.target.value)}
            aria-label="Task description"
          />
        </S.Sections>
        <S.SectionButtons>
          <img
            src={CancleIcon}
            alt="Cancel"
            onClick={cancelTask}
          />
          <img
            src={CheckIcon}
            alt="Success"
            onClick={editOrAddTask}
          />
        </S.SectionButtons>
    </S.NewTaskComp>
	)
}