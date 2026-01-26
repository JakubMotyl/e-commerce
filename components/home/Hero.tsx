import Image from "next/image";

function Hero() {
  return (
    <section className="flex-1 w-full px-default py-default flex items-end z-20">
      <div className="w-full text-white">
        <h1 className="md:block hidden font-semibold max-w-2xl text-[2.5rem]">
          DEFINE BEAUTY ON YOUR OWN TERMS WITH OWN.
        </h1>
        <h1 className="md:hidden block font-semibold text-[1.5rem] max-w-md">
          DEFINE BEAUTY ON YOUR OWN TERMS WITH OWN.
        </h1>
      </div>
    </section>
  );
}

export default Hero;
