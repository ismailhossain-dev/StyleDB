import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const query = { _id: new ObjectId(id) };
    const result = await dbConnect("products").findOne(query);
    return NextResponse.json(
      {
        result,
        success: true,
        message: "Single data fetched",
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "single data in failed", success: false, status: 400 });
  }
}
