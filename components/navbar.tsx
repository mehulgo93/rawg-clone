"use client";

import { Search } from "@/components/search";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="p-4 flex items-center justify-start flex-row">
      {/* <!-- Logo on the left --> */}
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-white text-2xl font-bold tracking-wider mr-4">
            RAW<span className="text-red-500">G</span>
          </h1>
        </Link>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <Search />
      </div>
    </div>
  );
};
