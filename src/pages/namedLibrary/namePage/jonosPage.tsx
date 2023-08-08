import { useUser } from "@clerk/nextjs";
import MainView from "~/pages/components/jpComponents/MainView";
import StickyFooter from "~/pages/components/jpComponents/StickyFooter";
import Link from "next/link";

import TopNav from "~/pages/components/jpComponents/TopNav";

export default function JonosPage() {
  const { user } = useUser();
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#09090b] to-[#d4d4d8]">
        <div>
          <div>
            <TopNav />
            <div className="p-2 text-3xl font-bold text-white">
              {" "}
              {user?.firstName ? `User logged in: ${user.firstName}` : ""}
            </div>
            <Link
              className="bg- flex max-w-xs flex-col gap-4 rounded-xl bg-[#6b7280] p-4 text-white drop-shadow-md hover:bg-white/50"
              href="/namedLibrary/namePage/jonosPage2"
            >
              <h3 className="text-2xl font-bold">Test Input Page:</h3>
            </Link>
          </div>
          <div>
            <MainView />
          </div>
          <div className="relative flex h-20 items-center justify-center bg-gray-600">
            <StickyFooter />
          </div>
        </div>
      </main>
    </div>
  );
}
