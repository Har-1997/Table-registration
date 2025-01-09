import styled from "styled-components";

export const PartTaskCont = styled.div`
  min-width: 22%;
  max-width: 430px;
  background: var(--tasks-part-bg-color);
  border-radius: var(--radius-standart);
  max-height: 75vh;
  height: fit-content;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 10px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  @media (1700px <= width <= 1800px) {
    min-width: 15%;
    max-width: 380px;
  }

  @media (1500px <= width <= 1700px) {
    min-width: 15%;
    max-width: 350px;
  }
  @media (1400px <= width <= 1500px) {
    min-width: 15%;
    max-width: 320px;
  }
  @media (1300px <= width <= 1400px) {
    min-width: 15%;
    max-width: 300px;
  }
  @media only screen and (1200px <= width <= 1300px) {
    min-width: 15%;
    max-width: 280px;
  }
  @media only screen and (1100px <= width <= 1200px) {
    min-width: 15%;
    max-width: 245px;
    overflow-x: scroll;
    padding: 5px;
  }
  @media only screen and (1000px <= width <= 1100px) {
    min-width: 15%;
    max-width: 220px;
    overflow-x: scroll;
    padding: 5px;
  }
`;

export const PartTaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 190px;
  height: 60px;
  padding: 10px 15px;
  position: sticky;
  top: 0;
  background: inherit;
  z-index: 10;
`;

export const PartTaskList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  min-height: 150px;
`;

export const IconWithText = styled.div`
  display: flex;
  img{
    width: var(--icons-width);
    height: var(--icons-height);
    margin-right: 10px;
  }
  h3{
    font-size: var(--tasks-title);
    color: var(--text-bold-white);
    margin: 0px;
    font-weight: var(--litle-bold: 500);
  }
`;

export const DeleteItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 70%;
  height: 80%;
  img{
    width: var(--icons-width);
    height: var(--icons-height);
    color: white;
    cursor: pointer;
  }
`;

export const AddItem = styled.span`
  color: white;
  cursor: pointer;
`;