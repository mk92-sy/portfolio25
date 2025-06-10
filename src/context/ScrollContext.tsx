import { createContext, useContext, useState, useEffect } from "react";

type ScrollContextType = {
  top: number;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [top, setTop] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*   useEffect(() => {
    console.log("top : ", top);
  }, [top]); */

  return (
    <ScrollContext.Provider value={{ top }}>{children}</ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
