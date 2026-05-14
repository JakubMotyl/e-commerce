"use client";

import { useState } from "react";
import { validateForm } from "@/utils/validators";
import { useCartStore } from "@/store/useCartStore";
import type { formData } from "@/types";
import { useRouter } from "next/navigation";

const emptyFormData: formData = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
};

function ContactForm() {
    // Get total price of products after discount and convert to Int
    // eg. $44.97 -> 4497 in database
    const getTotals = useCartStore((state) => state.getTotals);
    const finalTotal = Number(getTotals().finalTotal) * 100;

    const [formData, setFormData] = useState<formData>(emptyFormData);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const clearCart = useCartStore((state) => state.clearCart);

    // Init useRouter
    const router = useRouter();

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formErrors = validateForm(formData);

        setErrors(formErrors);

        if (Object.keys(formErrors).length > 0) {
            return;
        }

        const completeData = {
            ...formData,
            price: finalTotal,
        };

        try {
            const response = await fetch("/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ formData: completeData }),
            });
            if (!response.ok) return;

            const data = await response.json();

            // Custom success URL for specific order number
            router.push(`/checkout/success?orderId=${data.orderNumber}`);

            // After successful fetch, we reset the whole cart
            clearCart();
        } catch (err) {
            console.error(err);
        }

        setErrors({});
        setFormData(emptyFormData);
    };

    return (
        <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={handleSubmit}
            id="checkout-form"
            noValidate
        >
            {/* EMAIL */}
            <div className="flex flex-col gap-1.5 md:col-span-2">
                <label
                    className="text-xs font-semibold uppercase text-pure-black"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="example@domain.com"
                    value={formData.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={errors.email ? "true" : "false"}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            email: e.target.value,
                        })
                    }
                    className={`w-full border p-3 text-sm outline-none transition-colors text-pure-black placeholder:text-gray/50 ${
                        errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-terracotta/30 focus:border-terracotta"
                    }`}
                />
                {errors.email && (
                    <span
                        id="email-error"
                        className="text-red-500 text-xs mt-1"
                    >
                        {errors.email}
                    </span>
                )}
            </div>
            {/* FIRST NAME */}
            <div className="flex flex-col gap-1.5">
                <label
                    className="text-xs font-semibold uppercase text-pure-black"
                    htmlFor="firstName"
                >
                    First Name
                </label>
                <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    aria-describedby={
                        errors.firstName ? "firstName-error" : undefined
                    }
                    aria-invalid={errors.firstName ? "true" : "false"}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            firstName: e.target.value,
                        })
                    }
                    className={`w-full border p-3 text-sm outline-none transition-colors text-pure-black placeholder:text-gray/50 ${
                        errors.firstName
                            ? "border-red-500 focus:border-red-500"
                            : "border-terracotta/30 focus:border-terracotta"
                    }`}
                />
                {errors.firstName && (
                    <span
                        id="firstName-error"
                        className="text-red-500 text-xs mt-1"
                    >
                        {errors.firstName}
                    </span>
                )}
            </div>
            {/* LAST NAME */}
            <div className="flex flex-col gap-1.5">
                <label
                    className="text-xs font-semibold uppercase text-pure-black"
                    htmlFor="lastName"
                >
                    Last Name
                </label>
                <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    aria-describedby={
                        errors.lastName ? "lastName-error" : undefined
                    }
                    aria-invalid={errors.lastName ? "true" : "false"}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            lastName: e.target.value,
                        })
                    }
                    className={`w-full border p-3 text-sm outline-none transition-colors text-pure-black placeholder:text-gray/50 ${
                        errors.lastName
                            ? "border-red-500 focus:border-red-500"
                            : "border-terracotta/30 focus:border-terracotta"
                    }`}
                />
                {errors.lastName && (
                    <span
                        id="lastName-error"
                        className="text-red-500 text-xs mt-1"
                    >
                        {errors.lastName}
                    </span>
                )}
            </div>
            {/* ADRESS */}
            <div className="flex flex-col gap-1.5 mt-4">
                <label
                    className="text-xs font-semibold uppercase text-pure-black"
                    htmlFor="address"
                >
                    Address
                </label>
                <input
                    id="address"
                    type="text"
                    placeholder="Street Address"
                    value={formData.address}
                    aria-describedby={
                        errors.address ? "address-error" : undefined
                    }
                    aria-invalid={errors.address ? "true" : "false"}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            address: e.target.value,
                        })
                    }
                    className={`w-full border p-3 text-sm outline-none transition-colors text-pure-black placeholder:text-gray/50 ${
                        errors.address
                            ? "border-red-500 focus:border-red-500"
                            : "border-terracotta/30 focus:border-terracotta"
                    }`}
                />
                {errors.address && (
                    <span
                        id="address-error"
                        className="text-red-500 text-xs mt-1"
                    >
                        {errors.adress}
                    </span>
                )}
            </div>
            {/* APARTMENT */}
            <div className="flex flex-col gap-1.5 mt-4">
                <label
                    className="text-xs font-semibold uppercase text-pure-black"
                    htmlFor="apartment"
                >
                    Apt / Suite
                </label>
                <input
                    id="apartment"
                    type="text"
                    placeholder="Apartment, suite, etc. (optional)"
                    value={formData.apartment}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            apartment: e.target.value,
                        })
                    }
                    className="w-full border border-terracotta/30 p-3 text-sm outline-none focus:border-terracotta text-pure-black placeholder:text-gray/50 transition-colors"
                />
            </div>
            {/* CITY */}
            <div className="flex flex-col gap-1.5">
                <label
                    className="text-xs font-semibold uppercase text-pure-black"
                    htmlFor="city"
                >
                    City
                </label>
                <input
                    id="city"
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    aria-describedby={errors.city ? "city-error" : undefined}
                    aria-invalid={errors.city ? "true" : "false"}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            city: e.target.value,
                        })
                    }
                    className={`w-full border p-3 text-sm outline-none transition-colors text-pure-black placeholder:text-gray/50 ${
                        errors.city
                            ? "border-red-500 focus:border-red-500"
                            : "border-terracotta/30 focus:border-terracotta"
                    }`}
                />
                {errors.city && (
                    <span id="city-error" className="text-red-500 text-xs mt-1">
                        {errors.city}
                    </span>
                )}
            </div>
            {/* POSTAL CODE */}
            <div className="flex flex-col gap-1.5">
                <label
                    className="text-xs font-semibold uppercase text-pure-black"
                    htmlFor="postalCode"
                >
                    Postal Code
                </label>
                <input
                    id="postalCode"
                    type="text"
                    placeholder="01-234"
                    value={formData.postalCode}
                    aria-describedby={
                        errors.postalCode ? "postalCode-error" : undefined
                    }
                    aria-invalid={errors.postalCode ? "true" : "false"}
                    maxLength={6}
                    onChange={(e) => {
                        const onlyNumbers = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 5);

                        let formattedValue = "";

                        if (onlyNumbers.length > 2) {
                            formattedValue =
                                onlyNumbers.slice(0, 2) +
                                "-" +
                                onlyNumbers.slice(2);
                        } else {
                            formattedValue = onlyNumbers;
                        }

                        setFormData({
                            ...formData,
                            postalCode: formattedValue,
                        });
                    }}
                    className={`w-full border p-3 text-sm outline-none transition-colors text-pure-black placeholder:text-gray/50 ${
                        errors.postalCode
                            ? "border-red-500 focus:border-red-500"
                            : "border-terracotta/30 focus:border-terracotta"
                    }`}
                />
                {errors.postalCode && (
                    <span
                        id="postalCode-error"
                        className="text-red-500 text-xs mt-1"
                    >
                        {errors.postalCode}
                    </span>
                )}
            </div>
        </form>
    );
}

export default ContactForm;
