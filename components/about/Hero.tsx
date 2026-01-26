import TextBox from "./TextBox";
import { ImagesBox } from "./ImagesBox";

export default function Hero() {
  return (
    <section className="text-white flex flex-col gap-20 xl:gap-40 w-full pt-20 px-5 md:px-20 xl:px-0">
      <h1 className="text-4xl md:text-5xl font-semibold text-terracotta text-left w-full xl:px-16 2xl:px-20">
        OUR STORY
      </h1>

      <div className="flex flex-col w-full gap-20 xl:gap-40">
        <div className="text-img-wrapper">
          <TextBox
            title="Philosophy"
            desc="OWN fuses clinical precision with daily nourishment to unlock your
            skin’s potential. Our treatments resurface, hydrate, and revitalize,
            shielding your barrier against urban fatigue. We are dedicated to
            celebrating every complexion with skincare that is transformative,
            inclusive, and designed for real results."
          />
          <ImagesBox
            reversed={true}
            smallImg="/images/about/small-1.webp"
            bigImg="/images/about/big-1.webp"
            altImg="Philosophy image"
          />
        </div>

        <div className="text-img-wrapper">
          <TextBox
            title="The Founder"
            desc="Sloane Mercer, a formulation expert and industry rebel, 
          founded OWN to empower you to define beauty on your own terms. 
          Rejecting one-size-fits-all routines, she partnered with experts 
          to engineer potent, resurfacing formulas that clear the way for 
          your skin’s natural clarity, strength, and unapologetic glow."
          />
          <ImagesBox
            reversed={false}
            smallImg="/images/about/small-2.webp"
            bigImg="/images/about/big-2.webp"
            altImg="The founder image"
          />
        </div>

        <div className="text-img-wrapper flex flex-col gap-10">
          <TextBox
            title="Environment"
            desc="OWN demands sustainability without compromise. 
            We select ethically sourced actives and conscious packaging to 
            minimize our footprint, proving that high-performance skincare 
            can respect both your standards and the planet."
          />
          <img
            src="/images/about/environment.webp"
            alt="Environment image"
            className="w-full h-[60vh] xl:h-[120vh] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
