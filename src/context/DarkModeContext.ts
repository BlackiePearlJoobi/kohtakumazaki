import { createContext } from "react";

export interface ContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkModeContext = createContext<ContextType | undefined>(
  undefined,
);
