import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { UserButton } from "@clerk/nextjs";
import { SignIn } from "@clerk/nextjs";
import { SignUp } from "@clerk/nextjs";
// import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import LJE from "./pageLibrary";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  // const user = useUser();
  // console.log(user);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#4c0519] to-[#db2777]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span
              className="larger-font text-[hsl(158,100%,33%)]"
              style={{ fontSize: "100px" }}
            >
              DACREED
            </span>{" "}
            Test App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">ADMIN</h3>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              // href="https://create.t3.gg/en/introduction"
              href="./pageLibrary"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">LIBRARY</h3>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            {/* <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              {!user.isSignedIn && <SignInButton />}
              {user.isSignedIn && <SignOutButton />}
            </div> */}
            <SignIn/>
            <SignUp/>
            <UserButton afterSignOutUrl="/"/>
          </div>
        </div>
      </main>
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

  // const { data: secretMessage } = api.library.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: sessionData?.user !== undefined }
  // );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {/* {secretMessage && <span> - {secretMessage}</span>} */}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
