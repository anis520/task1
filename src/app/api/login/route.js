import { setToken } from "@/utils/setTokenCookie";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// login Api
export async function POST(req, res) {
  try {
    const { email } = await req.json();

    let cookie = await setToken({ email: email });
    return NextResponse.json(
      { status: true, message: "login successfull" },
      { status: 200, headers: cookie }
    );
  } catch (error) {
    return NextResponse.json(
      { status: false, message: error.message },
      { status: 500 }
    );
  }
}
