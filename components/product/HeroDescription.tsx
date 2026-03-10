"use client";

import { useState } from "react";
import type { Product } from "@/types";

export default function HeroDescription({ product }: { product: Product }) {
    const [quantity, setQuantity] = useState(1);
    const [openSection, setOpenSection] = useState<string | null>("benefits");

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        {
            id: "benefits",
            title: "BENEFITS:",
            content: "Visible Radiance.\nEven Tone.\nSmoother Texture.\nAnti-Aging.",
        },
        {
            id: "howItWorks",
            title: "HOW IT WORKS:",
            content: "Detailed explanation of how the product works goes here.",
        },
        {
            id: "howToUse",
            title: "HOW TO USE:",
            content: "Apply 2-3 drops to clean skin morning and night.",
        },
        {
            id: "safety",
            title: "PRODUCT SAFETY:",
            content: "Dermatologist tested. Safe for all skin types.",
        },
    ];

    return (
        <div className="w-full flex flex-col md:gap-6 gap-4 text-pure-black">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl lg:text-3xl font-semibold uppercase tracking-widest font-logo">
                    {product.title}
                </h1>
                <p className="text-base lg:text-lg font-medium">${product.price}</p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-[0.825rem] leading-relaxed text-gray">
                    {product.description ||
                        "This lightweight serum delivers a luminous glow while gently brightening and evening out skin tone. Designed to complement the unique needs of melanated skin, it visibly reduces pigmentation, improves texture, and enhances natural radiance."}
                </p>
                <button className="text-xs font-bold underline text-left w-fit mt-1 hover:text-terracotta transition-colors cursor-pointer">
                    Show more
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex flex-col gap-1">
                    <span className="font-semibold">Recommended for:</span>
                    <span className="text-gray">All skin types.</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="font-semibold">Texture:</span>
                    <span className="text-gray">Non-greasy and smooth.</span>
                </div>
            </div>
            <div className="mt-2">
                <button className="bg-highlight px-4 py-2 text-xs font-semibold text-terracotta">
                    30ml
                </button>
            </div>
            <div className="flex items-stretch h-11 mt-4">
                <div className="flex items-center justify-between border border-r-0 border-pure-black w-32 px-4 h-full">
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-xl text-pure-black cursor-pointer"
                    >
                        -
                    </button>
                    <span className="text-sm font-medium">{quantity}</span>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="text-xl text-pure-black cursor-pointer"
                    >
                        +
                    </button>
                </div>
                <button className="flex-1 bg-pure-black border border-pure-black hover:bg-transparent hover:text-pure-black font-medium duration-200 uppercase text-white text-sm h-full cursor-pointer">
                    Add to bag
                </button>
            </div>

            <div className="flex flex-col mt-8 border-t border-pure-black">
                {sections.map((section) => (
                    <div key={section.id} className="border-b border-pure-black">
                        <button
                            onClick={() => toggleSection(section.id)}
                            className="w-full flex items-center justify-between py-4 text-xs font-semibold uppercase cursor-pointer"
                        >
                            {section.title}
                            <span className="text-xl font-normal">
                                {openSection === section.id ? "–" : "+"}
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === section.id
                                ? "max-h-40 pb-4 opacity-100"
                                : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="text-sm text-gray-500 whitespace-pre-line leading-relaxed">
                                {section.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}