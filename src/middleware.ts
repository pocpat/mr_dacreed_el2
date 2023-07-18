// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware();

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// OTHER OPTION FROM PREVIOUS APP:

// import { withClerkMiddleware } from "@clerk/nextjs/server";
// import { log } from "console";
// import { NextResponse } from "next/server";
// export default withClerkMiddleware((req) => {
//     // console.log("middleware running");
//   return NextResponse.next();
// });
// // Stop Middleware running on static files
// export const config = { matcher:  '/((?!_next/image|_next/static|favicon.ico).*)',}; 

// ========> option 3 throm Theo again  <=========//
import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({ publicRoutes: ['/', '(.*)library'],});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};