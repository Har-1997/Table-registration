import * as S from "./Header.style";
import React, { JSX } from "react";
import { SearchTasks } from "../index.ts";

interface HeaderProps {
  title?: string;
  searchPlaceholder?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title = "Your tasks",
  searchPlaceholder = "поиск по описанию...",
}): JSX.Element => {
  return (
    <S.HeaderComp>
      <S.TitleText>
        {title}
      </S.TitleText>
      <SearchTasks title={searchPlaceholder} />
    </S.HeaderComp>
  );
};