import ProductsList from "./ProductsList"
import PaymentDetails from "./PaymentDetails"

export default function Hero() {
    return (
        <section className='px-default py-default flex flex-col gap-6 xl:gap-12'>
            <h1 className="text-4xl md:text-5xl font-semibold text-terracotta text-left">Your Cart</h1>
            <div className="flex lg:flex-row flex-col justify-between gap-10">
                <ProductsList />
                <PaymentDetails />
            </div>
        </section>
    )
}
