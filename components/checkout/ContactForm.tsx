"use client";

import { useState } from "react";
import {
    isValidEmail,
    hasMinLength,
    isValidPostalCode,
} from "@/utils/validators";

function ContactForm() {
    const emptyFormData = {
        firstName: "",
        lastName: "",
        email: "",
        adress: "",
        apartment: "",
        city: "",
        postalCode: "",
    };
    const [formData, setFormData] = useState(emptyFormData);

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!isValidEmail(formData.email)) newErrors.email = "Invalid Email";

        if (!isValidPostalCode(formData.postalCode))
            newErrors.postalCode = "Invalid Postal Code";

        if (!hasMinLength(formData.city, 2)) newErrors.city = "Invalid City";

        if (!hasMinLength(formData.firstName, 2))
            newErrors.firstName = "Invalid First Name";

        if (!hasMinLength(formData.lastName, 2))
            newErrors.lastName = "Invalid Last Name";

        // Opcjonalnie: upewnijmy się, że ktoś nie zostawił pustej ulicy
        if (!hasMinLength(formData.adress, 3))
            newErrors.adress = "Invalid Address";

        // Pole apartment omijamy - jest opcjonalne!

        return newErrors;
    };

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formErrors = validateForm();

        setErrors(formErrors);

        if (Object.keys(formErrors).length > 0) {
            return;
        }

        alert("Zamówienie wysłane!");

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
                    <span className="text-red-500 text-xs mt-1">
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
                    <span className="text-red-500 text-xs mt-1">
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
                    <span className="text-red-500 text-xs mt-1">
                        {errors.lastName}
                    </span>
                )}
            </div>
            {/* ADRESS */}
            <div className="flex flex-col gap-1.5 mt-4">
                <label
                    className="text-xs font-semibold uppercase text-pure-black"
                    htmlFor="adress"
                >
                    Address
                </label>
                <input
                    id="adress"
                    type="text"
                    placeholder="Street Address"
                    value={formData.adress}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            adress: e.target.value,
                        })
                    }
                    className={`w-full border p-3 text-sm outline-none transition-colors text-pure-black placeholder:text-gray/50 ${
                        errors.adress
                            ? "border-red-500 focus:border-red-500"
                            : "border-terracotta/30 focus:border-terracotta"
                    }`}
                />
                {errors.adress && (
                    <span className="text-red-500 text-xs mt-1">
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
                    <span className="text-red-500 text-xs mt-1">
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
                    <span className="text-red-500 text-xs mt-1">
                        {errors.postalCode}
                    </span>
                )}
            </div>
        </form>
    );
}

export default ContactForm;
