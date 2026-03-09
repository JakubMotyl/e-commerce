import Image from "next/image"
import HeroDescription from "./HeroDescription"
import { Product } from "@/types"

export default function Hero({ product }: { product: Product }) {
    console.log(product)
    return (
        <section>
            <div>

            </div>
            <HeroDescription />
        </section>
    )
}
