import { NextResponse } from "next/server";
import { checkPrivatePath } from "./utils/middlewareUtiity";

const userPaths = ["/profile"];
const authPaths = ["/login"];

export const middleware = async (req) => {
  if (userPaths.includes(req.nextUrl.pathname)) {
    return checkPrivatePath(req);
  } else {
    NextResponse.next();
  }
};
