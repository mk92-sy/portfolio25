import { ButtonHTMLAttributes } from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text";
  size?: "sm" | "md" | "lg";
  shape?: "square" | "rounded" | "circle";
  full?: boolean;
  loading?: boolean;
}

type StackContext = {
  stacks: string[];
  addStack: (item: string) => void;
  removeStack: (item: string) => void;
};

export type { Button, StackContext };
