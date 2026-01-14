function Hero() {
  return (
    <section className="h-dvh relative w-full bg-[url('/images/hero.webp')] bg-no-repeat bg-center bg-size-[100%_cover] px-default pb-15 flex items-end">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <h1 className="absolute z-10 md:block hidden bottom-15 2xl:left-20 xl:left-15 left-10  font-semibold max-w-2xl text-[2.5rem]">
        DEFINE BEAUTY ON YOUR OWN TERMS WITH ONSKN.
      </h1>
      <h1 className="md:hidden z-10 block font-semibold text-[1.5rem] max-w-md">
        DEFINE BEAUTY ON YOUR OWN TERMS WITH ONSKN.
      </h1>
    </section>
  );
}

export default Hero;
