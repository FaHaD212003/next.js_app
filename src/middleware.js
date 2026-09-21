import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "default_jwt_secret_key",
);

export async function middleware(req) {
  const token = req.cookies.get("auth_token")?.value;
  const { pathname } = req.nextUrl;

  let isValid = false;

  if (token) {
    try {
      await jwtVerify(token, SECRET);
      isValid = true;
    } catch {
      isValid = false;
    }
  }

  if (pathname.startsWith("/dashboard") && !isValid) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if ((pathname === "/login" || pathname === "/register") && isValid) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
