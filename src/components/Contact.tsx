import Social from "./Social";
import { useDarkMode } from "../context/useDarkMode";
import Heading from "./Heading";

const Contact = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      aria-labelledby="contact-heading"
      className={`px-[24px] py-[40px] ${darkMode ? "bg-[var(--dark-gray)]" : "bg-[var(--warm)]"} flex flex-col items-center gap-[40px] sm:px-[40px]`}
    >
      <Heading ariaLabel="contact-heading" text="Contact"></Heading>
      <p
        className={`text-[16px] font-medium leading-[26px] ${darkMode ? "text-[var(--gray)]" : "text-[var(--dark-gray)]"} text-center sm:text-[18px]`}
      >
        Let’s bring your ideas to life. Share a bit about your project,
        <br className="hidden sm:inline lg:hidden"></br> and I’ll get back to
        you as soon as I can.
      </p>
      <Social message="kohtakumazaki"></Social>
      <span
        className={`text-[14px] font-medium leading-[26px] ${darkMode ? "text-[var(--gray)]" : "text-[var(--dark-gray)]"} text-center sm:text-[16px]`}
      >
        © 2025 Kohta Kumazaki
      </span>
    </section>
  );
};

export default Contact;
