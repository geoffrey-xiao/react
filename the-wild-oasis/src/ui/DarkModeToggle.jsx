// import React from 'react'

import { HiMoon, HiSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiMoon /> : <HiSun />}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
