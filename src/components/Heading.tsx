import { useDarkMode } from "../context/useDarkMode";

interface HeadingProps {
  ariaLabel: string;
  text: string;
}

const Heading = ({ ariaLabel, text }: HeadingProps) => {
  const { darkMode } = useDarkMode();

  return (
    <h2
      id={ariaLabel}
      className={`text-[34px] font-bold leading-[40px] tracking-[-1.14px] ${darkMode ? "text-[var(--white)]" : "text-[var(--black)]"} sm:text-[44px] sm:leading-[var(--line-height-bold-48)] sm:tracking-[var(--letter-spacing-bold-48)]`}
    >
      {text}
    </h2>
  );
};

export default Heading;
