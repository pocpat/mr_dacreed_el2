import React from "react";
import Header from "~/componentsRoot/Header";
import WaterWave from "~/pages/components/elenasComponents/WaterWave";
import Link from "next/link";

const waiting: React.FC = () => {
  return (
    <>
      <Header />
      <div className="top-30 fixed right-0 mt-2">
        <Link
          href="/input/waiting/waitingQuizz"
          className="rounded bg-blue-300 p-2 font-semibold hover:bg-blue-900 hover:text-white active:bg-teal-800"
        >
          Try the quiz:
        </Link>
      </div>
      <div className="bg-[url('/bg_loading.png')] bg-cover">
        <div className="flex min-h-screen items-center justify-center">
          <WaterWave />
        </div>
      </div>
    </>
  );
};

export default waiting;
