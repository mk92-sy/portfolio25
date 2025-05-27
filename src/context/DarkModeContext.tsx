import { createContext, useContext, useState, useEffect } from "react";

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // 🌟 초기 상태: localStorage에서 불러오기 + 시스템 다크 모드 감지
  const getStoredDarkMode = () => {
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) return stored === "true"; // localStorage 값이 있으면 사용
    return window.matchMedia("(prefers-color-scheme: dark)").matches; // 없으면 시스템 모드 사용
  };

  const [isDarkMode, setIsDarkMode] = useState(getStoredDarkMode);

  // 🌟 다크 모드 변경 시 localStorage & CSS 변수 업데이트
  useEffect(() => {
    document.documentElement.setAttribute(
      "darkmode",
      isDarkMode ? "true" : "false"
    );
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
