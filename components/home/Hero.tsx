import Image from "next/image";

function Hero() {
  return (
    <section className="h-dvh relative w-full px-default py-default flex items-end">
      <Image
        src="/images/hero.webp"
        alt="ONSKN campaign"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-20"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      {/* Text Content */}
      <div className="z-10 w-full">
        <h1 className="md:block hidden font-semibold max-w-2xl text-[2.5rem]">
          DEFINE BEAUTY ON YOUR OWN TERMS WITH ONSKN.
        </h1>
        <h1 className="md:hidden block font-semibold text-[1.5rem] max-w-md">
          DEFINE BEAUTY ON YOUR OWN TERMS WITH ONSKN.
        </h1>
      </div>
    </section>
  );
}

export default Hero;
