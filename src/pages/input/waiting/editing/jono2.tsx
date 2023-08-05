import React from "react";
import TopNav from "~/pages/components/jpComponents/TopNav";
import StickyFooter from "~/pages/components/jpComponents/StickyFooter";
import { useUser } from "@clerk/nextjs";

const Jono2 = () => {
  const { user } = useUser();
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#09090b] to-[#d4d4d8]">
        <div>
          <div>
            <TopNav />
            <div className="p-2 text-3xl font-bold text-white">
              <span>Current user:</span>
              {user?.firstName ? (
                <span>
                  {" "}
                  {user?.firstName} {user?.id}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="relative flex h-20 items-center justify-center bg-gray-600">
            <StickyFooter />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Jono2;
