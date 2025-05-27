import { createContext, useContext, useState } from "react";
import type * as TYPES from "@/types";

const StackContext = createContext<TYPES.StackContext | undefined>(undefined);

export const StackProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [stacks, setStacks] = useState<string[]>([]);

  const addStack = (item: string) => {
    setStacks((prev) => [...prev, item]);
  };

  const removeStack = (item: string) => {
    setStacks((prev) => prev.filter((i) => i !== item));
  };

  return (
    <StackContext.Provider value={{ stacks, addStack, removeStack }}>
      {children}
    </StackContext.Provider>
  );
};

export const useStack = () => {
  const context = useContext(StackContext);
  if (!context) {
    throw new Error("useStack must be used within a StackProvider");
  }
  return context;
};
