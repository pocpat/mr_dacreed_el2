// import { z } from "zod";
// import { signIn, signOut, useSession } from "next-auth/react";
// import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

export default function jonosPage() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#042f2e] to-[#06b6d4]">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span style={{ color: "#fed7aa" }}>JP</span>
          </h1>
        </div>
      </main>
    </div>
  );
}
