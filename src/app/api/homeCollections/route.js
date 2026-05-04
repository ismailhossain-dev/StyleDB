import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await dbConnect("products").find().limit(6).toArray();
    console.log(result);
    return NextResponse.json(
      {
        success: true,
        message: "Products fetched successfully",
        data: result,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Database Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch products",
      },
      { status: 500 },
    );
  }
}
