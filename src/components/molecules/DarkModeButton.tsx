import { useEffect, useState } from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import IconButton from "../atoms/IconButton";

const DarkModeButton = () => {
  const [timer, setTimer] = useState(0);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  useEffect(() => {
    setTimeout(() => {
      setTimer(0);
    }, timer);
  }, [timer]);
  return (
    <IconButton
      key={`${isDarkMode ? "sun" : "moon"}`}
      icon={`${isDarkMode ? "sun" : "moon"}`}
      onClick={() => {
        if (timer === 0) setTimer(1000);
        toggleDarkMode();
      }}
      disabled={timer > 0}
    />
  );
};

export default DarkModeButton;
