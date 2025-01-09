import * as S from './SearchTasks.style';
import React, { JSX, ChangeEvent } from 'react';
import SearchIcon from '../../pictures/search.png';
import { useAppDispatch } from '../../hooks/useDispatch.ts';
import { tasksAsync } from '../../redux/tasks/tasksSlice.ts';

interface SearchTasksProps {
  title: string;
}

export const SearchTasks = ({title}: SearchTasksProps): JSX.Element=> {
	const dispatch = useAppDispatch();

	const searchTask = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(tasksAsync(e.target.value));
  };

	return(
		<S.SearchCont>
			<img src={SearchIcon} alt="Search" />
			<input
				type='text'
				placeholder={title}
				onChange={searchTask}
				aria-label="Search Tasks"
			/>
		</S.SearchCont>
	)
}
