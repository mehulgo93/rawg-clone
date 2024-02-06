"use client";

import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div className="p-4 flex items-center justify-start">
      {/* <!-- Logo on the left --> */}
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-white text-2xl font-bold tracking-wider mr-4">
            RAW<span className="text-red-500">G</span>
          </h1>
        </Link>
      </div>

      {/* <!-- Search component on the right --> */}
      <Search />
    </div>
  );
};

export default LandingPage;
