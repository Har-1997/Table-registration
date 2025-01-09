import { tasksItems } from "../pages/TasksPage/TasksPage.config";

export interface TaskMainTypes {
	id: number;
	startDay: number;
	endDay: number;
	text: string;
}

export interface dateType {
	year: string;
	month: string;
	day: string;
}

export interface tasksGroups {
	todo: tasksItems[];
	in_progress: tasksItems[];
	review: tasksItems[];
	done: tasksItems[];
	latestId: number;
}