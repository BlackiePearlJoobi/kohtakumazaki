import data from "../data/skills.json";

const Stack = () => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <section className="mx-[24px] flex flex-col items-center gap-[40px] sm:mx-[40px]">
      <h2 className="text-[34px] font-bold leading-[40px] tracking-[-1.14px] text-[var(--white)] sm:text-[44px] sm:leading-[var(--line-height-bold-48)] sm:tracking-[var(--letter-spacing-bold-48)]">
        My Skills
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-[20px] sm:gap-x-[25px]">
        {data.map((skill) => (
          <div
            key={skill.id}
            className="w-[85px] h-[85px] py-[13.5px] flex flex-col items-center gap-[4px]"
          >
            <img
              src={`${basePath}${skill.image}`}
              alt={`${skill.name} logo`}
              width={40}
              className="transition-transform duration-300 ease-in-out hover:scale-120 sm:w-[43px]"
            ></img>
            <span className="text-[13px] font-medium leading-[26px] text-[var(--gray)] text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
