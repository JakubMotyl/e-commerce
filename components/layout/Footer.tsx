export default function Footer() {
  return (
    <footer className="lg:px-20 xl:pt-24 pt-20 pb-4 bg-terracotta flex flex-col gap-8">
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:w-full md:w-3/4 w-4/5 gap-10 mx-auto">
        <div className="footer-col space-y-0.5">
          <a href="#" className="h-10 block footer-link">
            <img
              src="/images/download-apple.webp"
              alt="Download from App Store"
              className="h-full w-auto"
            />
          </a>
          <a href="" className="h-13 -ml-2 block footer-link">
            <img
              src="/images/download-google.webp"
              alt="Download from Google Play"
              className="h-full w-auto"
            />
          </a>
        </div>
        <div className="footer-col space-y-0.5">
          <a href="/" className="footer-link">
            Home
          </a>
          <a href="/shop" className="footer-link">
            Shop
          </a>
          <a href="/about" className="footer-link">
            About
          </a>
        </div>
        <div className="footer-col space-y-0.5">
          <a href="/contact" className="footer-link">
            Contact
          </a>
          <a href="/shipping_returns" className="footer-link">
            Shipping & Returns
          </a>
          <a href="/shipping_returns" className="footer-link">
            FAQs
          </a>
        </div>
        <form action="#" className="footer-col gap-4">
          <p className="text-sm font-semibold text-highlight">
            Stay in the know
          </p>
          <span className="text-xs text-highlight/60">
            Be the first one to receive new releases, special offers, and more
          </span>
          <div className="w-full flex items-center md:flex-row flex-col md:gap-4 gap-2">
            <input
              type="text"
              placeholder="Your Email"
              className="h-10 border-b border-b-white text-xs font-semibold w-full outline-none placeholder:text-highlight/60 text-white"
            />
            <button className="md:h-10 h-8 bg-highlight cursor-pointer text-terracotta font-semibold text-sm px-5 border border-highlight">
              Submit
            </button>
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" id="terms_conditions" className="checkbox" />
            <label
              htmlFor="terms_conditions"
              className="text-xs underline text-highlight cursor-pointer"
            >
              I agree with terms & conditions
            </label>
          </div>
        </form>
      </div>
      <div className="bg-highlight h-px rounded lg:w-full md:w-3/4 w-4/5 mx-auto"></div>
      <div className="flex items-center md:flex-row flex-col justify-between lg:w-full md:w-3/4 w-4/5 mx-auto">
        <span className="text-highlight text-sm">
          Copyright &copy; 2025 OWN.
        </span>
        <a
          href="/privacy_policy"
          className="text-highlight text-sm hover:text-white duration-200"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
