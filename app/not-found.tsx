import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex h-[70vh] flex-col items-center justify-center px-default text-center">
            <h2 className="font-logo text-9xl text-terracotta uppercase">
                404
            </h2>
            <p className="mt-4 text-xl font-medium text-pure-black uppercase tracking-widest">
                Oops! Page not found.
            </p>
            <p className="mt-2 text-gray-500 max-w-md">
                The page you are looking for doesn't exist or has been moved to
                another URL.
            </p>
            <Link
                href="/"
                className="mt-8 bg-pure-black text-white px-8 py-4 uppercase font-semibold text-sm hover:bg-terracotta transition-colors duration-300"
            >
                Back to Home
            </Link>
        </main>
    );
}
