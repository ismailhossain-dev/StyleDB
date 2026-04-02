import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  // client teke data access korchi
  try {
    const registerUser = await req.json();
    const result = await dbConnect("users").insertOne(registerUser);
    if (!result) return null;

    NextResponse.json({ message: "mongodb te user data post hoyche" }, { status: 200 });
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "user data post failed" }, { status: 400 }); //bad request
  }
}
