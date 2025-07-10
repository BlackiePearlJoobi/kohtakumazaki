import data from "../data/skills.json";
import { useDarkMode } from "../context/useDarkMode";
import Heading from "./Heading";

const Stack = () => {
  const { darkMode } = useDarkMode();
  const basePath = import.meta.env.BASE_URL;

  return (
    <section
      aria-labelledby="stack-heading"
      className="mx-[24px] flex flex-col items-center gap-[40px] sm:mx-[40px]"
    >
      <Heading ariaLabel="stack-heading" text="My Skills"></Heading>
      <div className="flex flex-row flex-wrap items-center justify-center gap-[20px] sm:gap-x-[25px]">
        {data.map((skill) => (
          <div
            key={skill.id}
            className="w-[85px] h-[85px] py-[13.5px] flex flex-col items-center gap-[4px]"
          >
            <img
              src={`${basePath}/${!darkMode && skill.light ? skill.light : skill.image}`}
              alt={`${skill.name} logo`}
              width={40}
              className="transition-transform duration-300 ease-in-out hover:scale-120 sm:w-[43px]"
            ></img>
            <span
              className={`text-[13px] font-medium leading-[26px] ${darkMode ? "text-[var(--gray)]" : "text-[var(--dark-gray)]"} text-center`}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
