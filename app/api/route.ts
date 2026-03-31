import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { NextResponse } from "next/server";

const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL || "file:./dev.db",
});

const prisma = new PrismaClient({ adapter });

export async function GET() {
    const coupon = await prisma.coupon.create({
        data: {
            name: "2026",
            discount: 10,
        },
    });
    return NextResponse.json(coupon);
}
