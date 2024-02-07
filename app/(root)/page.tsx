"use client";

import { Navbar } from "@/app/(root)/_components/navbar";
import React from "react";
import { Sidebar } from "./_components/sidebar";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <div className="flex flex-1 pt-28 font-bold text-5xl text-black dark:text-white">
          New and trending
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
