import type { formData } from "@/types";

export const isValidEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
};

export const isValidPostalCode = (postalCode: string) => {
    const pattern = /^\d{2}-\d{3}$/;
    return pattern.test(postalCode);
};

export const hasMinLength = (value: string, minLenght: number) =>
    value.trim().length >= minLenght;

export const validateForm = (formData: formData) => {
    const newErrors: Record<string, string> = {};

    if (!isValidEmail(formData.email)) newErrors.email = "Invalid Email";

    if (!isValidPostalCode(formData.postalCode))
        newErrors.postalCode = "Invalid Postal Code";

    if (!hasMinLength(formData.city, 2)) newErrors.city = "Invalid City";

    if (!hasMinLength(formData.firstName, 2))
        newErrors.firstName = "Invalid First Name";

    if (!hasMinLength(formData.lastName, 2))
        newErrors.lastName = "Invalid Last Name";

    if (!hasMinLength(formData.address, 3))
        newErrors.adress = "Invalid Address";

    return newErrors;
};
