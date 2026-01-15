import type { Metadata } from "next";
import { Archivo, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

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
  title: "ONSKN",
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
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
