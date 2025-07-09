import data from "../data/social.json";

const Social = ({ message }: { message: string }) => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="z-10 w-[174px] flex flex-col gap-[16px] sm:w-auto">
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[24px] font-bold leading-[var(--line-height-bold-24)] text-[var(--white)] text-center">
          {message}
        </h2>
        <hr className="w-full border-0 h-[2px] bg-[var(--green)]" />
      </div>
      <div className="flex flex-row items-end justify-between">
        {data.map((social) => (
          <a key={social.id} href={social.link} target="_blank">
            <img
              src={`${basePath}/${social.image}`}
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
