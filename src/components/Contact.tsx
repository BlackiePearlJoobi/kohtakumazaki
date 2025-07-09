import Social from "./Social";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative px-[24px] py-[40px] bg-[var(--dark-gray)] flex flex-col items-center sm:px-[40px]"
    >
      <div className="flex flex-col items-center gap-[40px]">
        <h2 className="text-[34px] font-bold leading-[40px] tracking-[-1.14px] text-[var(--white)] text-center sm:text-[44px] sm:leading-[var(--line-height-bold-48)] sm:tracking-[var(--letter-spacing-bold-48)]">
          Contact
        </h2>
        <p className="text-[16px] font-medium leading-[26px] text-[var(--gray)] text-center sm:text-[18px]">
          Let’s bring your ideas to life. Share a bit about your project,
          <br className="hidden sm:inline lg:hidden"></br> and I’ll get back to
          you as soon as I can.
        </p>
        <Social message="kohtakumazaki"></Social>
        <span className="text-[14px] font-medium leading-[26px] text-[var(--gray)] text-center sm:text-[16px]">
          © 2025 Kohta Kumazaki
        </span>
      </div>
    </section>
  );
};

export default Contact;
