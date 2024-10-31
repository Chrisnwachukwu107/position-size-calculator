import { ReactNode } from "react";

export interface ButtonProps {
  className: string;
  onClick: () => void;
  disabled: boolean;
  children: ReactNode;
};

export interface OptionProps {
  value: string;
  children: ReactNode;
};
