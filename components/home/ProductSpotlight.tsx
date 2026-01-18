export default function ProductSpotlight() {
  return (
    <section className="h-[90dvh] bg-terracotta flex lg:flex-row flex-col overflow-hidden">
      <div className="lg:w-1/2 lg:h-full w-full h-1/2 flex items-center justify-center p-6">
        <div className="flex flex-col items-center text-center max-w-lg mx-auto gap-6">
          <p className="text-white text-4xl lg:text-5xl font-black font-logo uppercase tracking-widest leading-tight">
            OWN. SKIN <br /> PERFECTOR
          </p>
          <span className="text-white text-sm leading-relaxed opacity-90 font-medium">
            Transform rough texture into liquid silk. OWN. RESURFACING SOLUTION
            is a gentle yet potent daily exfoliator powered by a 10% AHA/BHA
            complex. It sweeps away dullness and unclogs pores, revealing the
            fresh, luminous skin waiting underneath. Polish your canvas and
            reclaim your natural clarity.
          </span>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:h-full h-1/2">
        <img
          src="/images/productspotlight.webp"
          alt="Product Spotlight"
          className="h-full w-full object-center lg:object-cover object-contain lg:rounded-none rounded-t-3xl"
        />
      </div>
    </section>
  );
}
