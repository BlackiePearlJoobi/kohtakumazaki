import { useState } from "react";
import { useDarkMode } from "../context/useDarkMode";

const LightMode = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const [isHovered, setIsHovered] = useState(false);
  const basePath = import.meta.env.BASE_URL;

  return (
    <button
      type="button"
      className="mr-[24px] mt-[10px] cursor-pointer sm:mr-[40px] sm:mt-[37px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setDarkMode((prev) => !prev)}
    >
      <img
        src={`${basePath}/assets/images/${darkMode ? "light" : "dark"}-mode${isHovered ? "-hover.svg" : ".svg"}`}
        alt={`light mode switch`}
        width={23}
      ></img>
    </button>
  );
};

export default LightMode;
