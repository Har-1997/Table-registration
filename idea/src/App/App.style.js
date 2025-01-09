import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --text-bold-white: rgba(255, 255, 255, 0.87);
    --regular-text-color: rgba(255, 255, 255, 0.6);
    --red-text: rgba(252, 54, 57, 0.6);
    --blue-text: #0184CF;
    --tasks-part-bg-color: rgba(0, 0, 0, 0.7);
    --icon-background: #FFFFFF12;
    --icon-background-hover: #FFFFFF25;
    --global-padding: 25px;
    --title-text-size: 30px;
    --tasks-title: 20px;
    --icons-width: 24px;
    --icons-height: 24px;
    --litle-bold: 500;
    --radius-standart: 4px;
    --icons-padding: 8px;
  }
`