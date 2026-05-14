import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        if (!body.formData) {
            return NextResponse.json("Form data is required", { status: 400 });
        }

        const userData = await prisma.order.create({
            data: {
                firstName: body.formData.firstName,
                lastName: body.formData.lastName,
                email: body.formData.email,
                city: body.formData.city,
                address: body.formData.address,
                apartment: body.formData.apartment || null,
                postalCode: body.formData.postalCode,
                price: body.formData.price,
            },
        });

        return NextResponse.json(userData, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json("Data is empty!", { status: 400 });
    }
}
