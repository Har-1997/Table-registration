import styled from "styled-components";

export const NewTaskComp = styled.div`
	padding: 10px 12px;
	background: #FFFFFF1A;
	margin-bottom: 15px;
	border-radius: var(--radius-standart);
`;

export const Sections = styled.div`
	display: flex;
	margin: 5px 0px;

	.item-title{
		color: var(--regular-text-color);
		margin-right: 15px
	}
  .chose-value {
    width: 200px;
    height: 22px;
    border-radius: 4px;
    border: 1px solid var(--text-bold-white);
    background: transparent;
    color: white;
    padding: 0px 7px;
    box-sizing: border-box;
    WebkitAppearance: none;
    appearance: none;

    &:hover{
      border: 1px solid var(--blue-text);
    }
    &:focus{
      border: 1px solid var(--blue-text);
		  outline: none;
    }
    @media only screen and (max-width: 1400px) {
      width: 65%;
    }
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }  
`;

export const SectionButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  img{
    width: var(--icons-width);
    height: var(--icons-height);
    padding: var(--icons-padding);
    border-radius: 50%;
    color: red;
    cursor: pointer;
    background: var(--icon-background);
    margin-left: 10px;
  }
  img:hover{
    background: var(--icon-background-hover);
  }
`;