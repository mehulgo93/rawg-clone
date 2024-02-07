"use client";

import { Navbar } from "@/app/(root)/_components/navbar";
import React from "react";
import { Sidebar } from "./_components/sidebar";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default LandingPage;
