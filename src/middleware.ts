// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware();

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// OTHER OPTION FROM PREVIOUS APP:

import { withClerkMiddleware } from "@clerk/nextjs/server";
import { log } from "console";
import { NextResponse } from "next/server";
export default withClerkMiddleware((req) => {
    console.log("middleware running");
  return NextResponse.next();
});
// Stop Middleware running on static files
export const config = { matcher:  '/((?!_next/image|_next/static|favicon.ico).*)',}; 