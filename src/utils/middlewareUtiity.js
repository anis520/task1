import { NextResponse } from "next/server";
import { toast } from "react-toastify";
import { verifyToken } from "./jwtHelper";

export const checkPrivatePath = async (req) => {
  try {
    let token = req.cookies.get("token");
    let payload = await verifyToken(token["value"]);

    if (payload["email"]) {
      const requestHeaders = new Headers(req.headers);
      requestHeaders.set("email", payload["email"]);
      return NextResponse.next({ request: { headers: requestHeaders } });
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
};
