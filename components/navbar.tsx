"use client";

import { Search } from "@/components/search";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] px-2 lg:px-4 flex justify-between items-center shadow-sm">
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
    </nav>
  );
};
