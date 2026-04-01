import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        if (!body.code || body.code.length === 0) {
            return NextResponse.json("Code is required", { status: 400 });
        }

        const coupon = await prisma.coupon.findFirst({
            where: { name: body.code },
        });
        if (coupon === null) {
            return NextResponse.json("This coupon does not exist", {
                status: 404,
            });
        }
        return NextResponse.json(coupon, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json("Data is empty!", { status: 400 });
    }
}
