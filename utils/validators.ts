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
