import styled from "styled-components";

export const SearchCont = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	input{
		min-height: 20%;
		width: 430px;
		height: 40px;
		padding: 0 10px 0 60px;
		box-sizing: border-box;
		border: 1px solid var(--regular-text-color);
		border-radius: 20px;
		margin-left: 15px;
		background: transparent;
		color: white;
		background: #FFFFFF12;
		@media only screen and (max-width: 1000px) {
			width: 100%
		}
	}
	input:hover{
		border: 1px solid var(--blue-text);
	}
	input:focus {
		box-shadow: 0px 0px 0px 5px var(--blue-text);
		outline: none;
	}

	img{
		width: var(--icons-width);
		height: var(--icons-height);
		cursor: pointer;
		padding: 5px;
		position: absolute;
		left: 30px;
	}
	img:hover{
		background: rgba(250, 250, 250, 0.5);
		border-radius: 50%;
	}
`