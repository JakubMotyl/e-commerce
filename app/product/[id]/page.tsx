import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/product/Hero"
import { getProductById } from "@/lib/api";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <>
      <Navbar homePage={false} />
      <Hero product={product} />
    </>
  )
}
