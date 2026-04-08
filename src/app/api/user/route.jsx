import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  //   console.log("req console ", req);
  try {
    const body = await req.json();
    // console.log("user data console", body);

    const result = await dbConnect("users").insertOne(body);
    return NextResponse.json({ message: "send user data in mongodb" }, result);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "user data is required", status: 400 });
  }
}
