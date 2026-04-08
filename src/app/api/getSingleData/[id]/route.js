import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    // 1. Params await kora (Next.js 15 er jonno)
    const { id } = await params;

    // 3. Query ready kora
    const query = { _id: new ObjectId(id) };

    // 4. Data find koro
    const result = await dbConnect("products").findOne(query);

    if (!result) {
      return NextResponse.json({ success: false, message: "Data not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        result,
        success: true,
        message: "Single data fetched",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Server error occurred", success: false },
      { status: 500 }, // Error hole status 500 deya valo
    );
  }
}
