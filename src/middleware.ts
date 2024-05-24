import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthenticatedUser } from "./utils/amplify-utils";

export async function middleware(request: NextRequest) {
  console.log("middleware.ts: request.url", request.url);

  const authenticatedUser = await getAuthenticatedUser();

  console.log("middleware.ts: authenticatedUser", authenticatedUser);

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
