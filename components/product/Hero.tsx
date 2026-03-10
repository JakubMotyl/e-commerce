import HeroDescription from "./HeroDescription"
import ProductSpotlight from "../home/ProductSpotlight"
import { Product } from "@/types"

export default function Hero({ product }: { product: Product }) {
    console.log(product)
    return (
        <section>
            <div className="px-default py-default flex flex-col lg:flex-row gap-10 lg:gap-20 w-full">
                <div className="w-full lg:w-1/2 flex items-center justify-center bg-white lg:max-h-[85dvh]">
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        loading="lazy"
                        className="w-full h-auto max-h-[70vh] object-contain object-center"
                    />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-start">
                    <HeroDescription product={product} />
                </div>
            </div>
            <div className="py-default">
                <ProductSpotlight />
            </div>
        </section>
    )
}