import data from "../data/projects.json";
import { useDarkMode } from "../context/useDarkMode";
import ViewButton from "./ViewButton";
import Heading from "./Heading";

const Projects = () => {
  const { darkMode } = useDarkMode();
  const basePath = import.meta.env.BASE_URL;

  return (
    <section
      aria-labelledby="projects-heading"
      className="relative mx-[24px] flex flex-col items-center gap-[40px] sm:mx-[40px] lg:max-w-[1325px] lg:mx-auto"
    >
      <Heading ariaLabel="projects-heading" text="My Projects"></Heading>
      <div className="flex flex-col gap-[40px] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-[22px]">
        {data.map((project) => (
          <article
            key={project.id}
            className={`${darkMode ? "bg-[var(--dark-gray)]" : "bg-[var(--warm)]"} rounded-[8px] flex flex-col gap-[20px] sm:w-[calc(50%-11px)] sm:max-w-[400px]`}
          >
            <picture>
              <source
                srcSet={`${basePath}/${project.image.large}`}
                media="(min-width: 1024px)"
                width={545}
                height={400}
              ></source>
              <img
                srcSet={`${basePath}/${project.image.small}`}
                width={343}
                height={253}
                alt={`thumbnail of ${project.name}`}
                className="w-full h-[250px] object-cover rounded-t-[8px] lg:h-[300px]"
              ></img>
            </picture>
            <div className="px-[24px] flex flex-col gap-[20px]">
              <h4
                className={`text-[24px] font-bold leading-[var(--line-height-bold-24)] ${darkMode ? "text-[var(--white)]" : "text-[var(--black)]"}`}
              >
                {project.name}
              </h4>
              <p
                className={`text-[16px] font-medium leading-[26px] ${darkMode ? "text-[var(--gray)]" : "text-[var(--dark-gray)]"}`}
              >
                {project.description}
              </p>
              <ul className="flex flex-row flex-wrap gap-x-[8px] gap-y-[10px]">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className={`text-[13px] font-medium leading-[var(--line-height-medium-18)] ${darkMode ? "text-[var(--gray)] bg-[var(--stone)]" : "text-[var(--dark-gray)] bg-[var(--orange)]"} rounded-[20px] px-[8px] sm:text-[14px]`}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-[24px] mb-[24px] flex flex-row gap-[30px]">
              <ViewButton link={project.live} label="VIEW PROJECT"></ViewButton>
              <ViewButton link={project.code} label="VIEW CODE"></ViewButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
