import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/about/Hero";

function page() {
  return (
    <div className="min-h-dvh">
      <Navbar homePage={false} />
      <Hero />
    </div>
  );
}

export default page;
