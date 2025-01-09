import styled from "styled-components";

export const TaskItemCont = styled.div`
	padding: 10px 12px;
	background: #FFFFFF1A;
	margin-bottom: 15px;
	border-radius: var(--radius-standart);
	cursor: pointer;
`;

export const Sections = styled.div`
	display: flex;
	margin: 5px 0px;

	.item-title{
		color: var(--regular-text-color);
		margin-right: 15px
	}
	.item-value{
		color: var(--text-bold-white);

		&.late{
			color: var(--red-text);
		}

		@media only screen and (1000px <= width <= 1100px) {
			word-break: break-word;
    	overflow-wrap: anywhere;
		}
	}
`;

export const EditDataCont = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const EditIcon = styled.img`
	display: flex;
	width: var(--icons-width);
  height: var(--icons-height);
	padding: var(--icons-padding);
  color: white;
  cursor: pointer;
	opacity: 0px;
	border-radius: 50%;
	background: var(--icon-background);
	&:hover{
		background: var(--icon-background-hover);
	}
`;