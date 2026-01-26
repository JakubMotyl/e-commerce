import type { Metadata } from "next";
import { Archivo, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-logo",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OWN",
  description: "Minimalistic shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${montserrat.variable} antialiased`}
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
