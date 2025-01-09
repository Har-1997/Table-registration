import SmileIcon from "../../pictures/bxs_happy-alt.png";
import SmileReverseIcon from "../../pictures/bxs_smile.png";
import DownUpsideIcon from "../../pictures/bxs_upside-down.png";
import GhostIcon from "../../pictures/bxs_ghost.png";
import DeleteIcon from "../../pictures/trash.png";

export interface partTaskTypes{
  partName: string;
  title: string;
  iconWithTitle: string;
  icon?: string;
  addItem?: string;
}

export const partData: partTaskTypes[] = [
	{
    partName: 'todo',
		title: 'To Do',
		iconWithTitle: SmileIcon,
		addItem: '+ Добавить',
	},
	{
    partName: 'in_progress',
		title: 'In Progress',
		iconWithTitle: SmileReverseIcon,
	},
	{
    partName: 'review',
		title: 'Review',
		iconWithTitle: DownUpsideIcon,
	},
	{
    partName: 'done',
		title: 'Done',
		iconWithTitle: GhostIcon,
		icon: DeleteIcon,
	},
];

export interface tasksItems {
	id: number;
	type: string;
	startDay: number;
	endDay: number;
	text: string;
}