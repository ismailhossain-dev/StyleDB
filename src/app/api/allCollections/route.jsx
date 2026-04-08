import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await dbConnect("products").find().toArray();

    return NextResponse.json(
      {
        message: "mongodb amake data dise",
        data: result, // ✅ data add korte hobe
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "mongodb amader products data dei nai" }, { status: 400 });
  }
}
