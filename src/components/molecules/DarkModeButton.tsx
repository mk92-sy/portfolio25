import { useDarkMode } from "../../context/DarkModeContext";
import IconButton from "../atoms/IconButton";

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <IconButton
      icon={`${isDarkMode ? "sun" : "moon"}`}
      onClick={toggleDarkMode}
    />
  );
};

export default DarkModeButton;
