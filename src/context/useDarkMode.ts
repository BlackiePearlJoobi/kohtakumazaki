import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("useDarkMode must be used within a ContextProvider");
  return context;
};
