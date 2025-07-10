import { useDarkMode } from "../context/useDarkMode";

const Line = () => {
  const { darkMode } = useDarkMode();

  return (
    <hr
      className={`w-[calc(100%-48px)] border-0 h-[0.5px] ${darkMode ? "bg-[var(--gray)]" : "bg-[var(--dark-gray)]"} mx-auto sm:w-[calc(100%-80px)]`}
    />
  );
};

export default Line;
