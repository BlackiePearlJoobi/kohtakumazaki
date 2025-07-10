import { useDarkMode } from "../context/useDarkMode";

interface ViewButtonProps {
  link: string;
  label: string;
}

const ViewButton = ({ link, label }: ViewButtonProps) => {
  const { darkMode } = useDarkMode();

  return (
    <div className="transition-transform duration-300 ease-in-out hover:scale-110 flex flex-col">
      <a
        href={link}
        target="_blank"
        className={`text-[14px] font-bold leading-[26px] tracking-[2.29px] ${darkMode ? "text-[var(--white)] hover:text-[var(--green)]" : "text-[var(--black)] hover:text-[var(--dark-orange)]"} sm:text-[16px]`}
      >
        {label}
      </a>
      <hr
        className={`w-full border-0 h-[2px] ${darkMode ? "bg-[var(--green)]" : "bg-[var(--dark-orange)]"}`}
      />
    </div>
  );
};

export default ViewButton;
