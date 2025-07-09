import data from "../data/projects.json";

const Projects = () => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <section className="relative mx-[24px] flex flex-col items-center gap-[40px] sm:mx-[40px]">
      <h2 className="text-[34px] font-bold leading-[40px] tracking-[-1.14px] text-[var(--white)] sm:text-[44px] sm:leading-[var(--line-height-bold-48)] sm:tracking-[var(--letter-spacing-bold-48)]">
        My Projects
      </h2>
      <div className="flex flex-col gap-[40px] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-[22px]">
        {data.map((project) => (
          <article
            key={project.id}
            className="bg-[var(--dark-gray)] rounded-[8px] flex flex-col gap-[20px] sm:w-[calc(50%-11px)] sm:max-w-[400px]"
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
              <h3 className="text-[24px] font-bold leading-[var(--line-height-bold-24)] text-[var(--white)]">
                {project.name}
              </h3>
              <p className="text-[16px] font-medium leading-[26px] text-[var(--gray)]">
                {project.description}
              </p>
              <ul className="flex flex-row flex-wrap gap-x-[8px] gap-y-[10px]">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="text-[13px] font-medium leading-[var(--line-height-medium-18)] text-[var(--gray)] bg-[var(--stone)] rounded-[20px] px-[8px] sm:text-[14px]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-[24px] mb-[24px] flex flex-row gap-[30px]">
              <div className="transition-transform duration-300 ease-in-out hover:scale-110 flex flex-col">
                <a
                  href={`${project.live}`}
                  target="_blank"
                  className="text-[14px] font-bold leading-[26px] tracking-[2.29px] text-[var(--white)] hover:text-[var(--green)] sm:text-[16px]"
                >
                  VIEW PROJECT
                </a>
                <hr className="w-full border-0 h-[2px] bg-[var(--green)]" />
              </div>
              <div className="transition-transform duration-300 ease-in-out hover:scale-110 flex flex-col">
                <a
                  href={`${project.code}`}
                  target="_blank"
                  className="text-[14px] font-bold leading-[26px] tracking-[2.29px] text-[var(--white)] hover:text-[var(--green)] sm:text-[16px]"
                >
                  VIEW CODE
                </a>
                <hr className="w-full border-0 h-[2px] bg-[var(--green)]" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
