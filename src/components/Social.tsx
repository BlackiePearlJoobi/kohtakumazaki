import data from "../data/social.json";
import { useDarkMode } from "../context/useDarkMode";

const Social = ({ message }: { message: string }) => {
  const { darkMode } = useDarkMode();
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="z-10 w-[174px] flex flex-col gap-[16px] sm:w-auto">
      <div className="flex flex-col gap-[10px]">
        <h3
          className={`text-[24px] font-bold leading-[var(--line-height-bold-24)] ${darkMode ? "text-[var(--white)]" : "text-[var(--black)]"} text-center`}
        >
          {message}
        </h3>
        <hr
          className={`w-full border-0 h-[2px] ${darkMode ? "bg-[var(--green)]" : "bg-[var(--dark-orange)]"}`}
        />
      </div>
      <div className="flex flex-row items-end justify-between">
        {data.map((social) => (
          <a key={social.id} href={social.link} target="_blank">
            <img
              src={`${basePath}/${darkMode ? social.image.dark : social.image.light}`}
              alt={`${social.name} icon`}
              width={23}
              className="transition-transform duration-300 ease-in-out hover:scale-120"
            ></img>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;
