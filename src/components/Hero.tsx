import Social from "./Social";
import { useDarkMode } from "../context/useDarkMode";

const Hero = () => {
  const { darkMode } = useDarkMode();
  const basePath = import.meta.env.BASE_URL;

  return (
    <section className="w-full px-[24px] flex flex-col items-center gap-[24px] sm:px-[40px] sm:flex-row-reverse lg:max-w-[1325px] lg:mx-auto lg:gap-[120px]">
      <picture className="w-[220px] sm:w-[275px] lg:w-[350px]">
        <source
          srcSet={`${basePath}/assets/images/image-profile-desktop.jpg`}
          media="(min-width: 1024px)"
          width={445}
          height={593}
        ></source>
        <source
          srcSet={`${basePath}/assets/images/image-profile-tablet.jpg`}
          media="(min-width: 640px)"
          width={375}
          height={500}
        ></source>
        <img
          src={`${basePath}/assets/images/image-profile-mobile.jpg`}
          alt="Profile image"
          width={300}
          height={400}
          className="rounded-[50%]"
        ></img>
      </picture>
      <article className="flex flex-col items-center gap-[24px] sm:flex-1 sm:items-start sm:gap-[36px]">
        <h1
          className={`text-[34px] font-bold leading-[40px] tracking-[-1.14px] ${darkMode ? "text-[var(--white)]" : "text-[var(--black)]"} text-center sm:text-start sm:text-[42px] sm:leading-[42px] sm:tracking-[-2.05px] lg:text-[50px] lg:leading-[50px]`}
        >
          Hey there! <br></br>I'm{" "}
          <span
            className={`underline decoration-[4px] underline-offset-8 bg-gradient-to-r ${darkMode ? "decoration-[var(--green)] from-blue-500 to-orange-500" : "decoration-[var(--dark-orange)] from-indigo-600 to-rose-600"} bg-clip-text text-transparent inline-block sm:text-[48px] sm:leading-[60px] lg:text-[52px] lg:leading-[80px]`}
          >
            Kohta Kumazaki
          </span>
        </h1>
        <p
          className={`text-[16px] font-medium leading-[26px] ${darkMode ? "text-[var(--gray)]" : "text-[var(--dark-gray)]"} text-center sm:text-[18px] sm:text-start`}
        >
          Front-end developer based in the US, focused on building inclusive,
          scalable systems that prioritize real-world usability and ethical
          design.
        </p>
        <Social message="COLLABORATE WITH ME"></Social>
      </article>
    </section>
  );
};

export default Hero;
