import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);

// I have commented out the below which slots into the above return( ) but trying something else with pages.  Keep the below.
// return (
//   <SessionProvider session={session}>
//     <ClerkProvider {...pageProps}>
//     <Component {...pageProps} />
//     </ClerkProvider>
//   </SessionProvider>
// );
