// import { z } from "zod";
// import { signIn, signOut, useSession } from "next-auth/react";
// import Head from "next/head";
import Link from "next/link";
import MainView from "~/pages/components/jpComponents/MainView";
// import { api } from "~/utils/api";
import TopNav from "~/pages/components/jpComponents/TopNav";

export default function jonosPage() {
  const styleContainer = {
    width: "100vw",
    height: "60vh",
    backgroundColor: "#082f49",
    // border: "1px solid black",
    padding: "10px",
  };
  const styleSection1 = {
    // width: "100vw",
    // height: "vh",
    // backgroundColor: "#082f49",
    // // border: "1px solid black",
    // padding: "10px",
  };

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#09090b] to-[#d4d4d8]">
        <div>
          <div style={styleSection1}>
            <TopNav />
          </div>
          <div style={styleContainer}>
            <MainView />
          </div>
        </div>
      </main>
    </div>
  );
}
