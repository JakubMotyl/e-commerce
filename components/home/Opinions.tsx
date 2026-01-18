import { getBestSellers } from "@/lib/api";

export default async function Opinions() {
  const products = await getBestSellers();
  return (
    <section className="px-default py-default">
      <p>WHY PEOPLE LOVE OWN</p>
      <div></div>
    </section>
  );
}
