import { NextResponse } from "next/server";

// logout Api
export async function GET(req, res) {
  try {
    const cookieString = `token=${null};expires=${0};Max-Age=0;path=/`;

    return NextResponse.json(
      { status: true, message: "logout successfully" },
      { status: 200, headers: { "set-cookie": cookieString } }
    );
  } catch (error) {
    const cookieString = `token=${null};expires=${0};Max-Age=0;path=/`;

    return NextResponse.json(
      { status: false },
      { status: 500, headers: { "set-cookie": cookieString } }
    );
  }
}
