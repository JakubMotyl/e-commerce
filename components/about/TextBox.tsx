interface TextBoxProps {
  title: string;
  desc: string;
}

export default function TextBox({ title, desc }: TextBoxProps) {
  return (
    <div className="xl:ml-auto xl:mr-0 mx-auto md:w-[55%] w-full flex flex-col gap-4">
      <div className="bg-black/40 rounded w-full h-px"></div>
      <div className="flex justify-between xl:gap-40 xl:flex-row flex-col gap-4">
        <p className="text-pure-black text-base whitespace-nowrap font-semibold">
          {title}
        </p>
        <span className="text-[0.8rem] pr-20 text-black">{desc}</span>
      </div>
    </div>
  );
}
