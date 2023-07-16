import { z } from "zod";
import Link from "next/link";

export default function LJE() {
  return (
    <div className="flex max-w-xs flex-col gap-4">
      <h1>Lybrary made by: </h1>
      <div className="flex max-w-xs flex-row gap-4">
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white hover:bg-white/20"
          href="#"
          target="_blank"
        >
          <h3 className="text-2xl font-bold">JONO</h3>
        </Link>
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white hover:bg-white/20"
          // href="/components/elenasComponents/eComponents"
          href="/elenasPage/elenasPage"
          target="_blank"
        >
          <h3 className="text-2xl font-bold">ELENA</h3>
        </Link>
      </div>
    </div>
  );
}
