import styled from "styled-components";
import BgPicture from "../../pictures/bg.png";

export const ListTasksComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${BgPicture});
  background-size: cover;
  background-position: center;
  height: 100vh;
  padding: 25px;
  box-sizing: border-box;
`;

export const PartsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
  height: 85%;
  max-width: 1920px;
  margin-top: 25px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    overflow-x: auto;
  }
`;