"use client";

import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <>
      <div className="flex ml-2 border-2 w-[85%] border-gray-400 bg-gray-800 rounded-full overflow-hidden group">
        <div className="flex items-center justify-center bg-gray-800 group-hover:bg-white/100 group-focus:bg-white">
          <SearchIcon className="ml-3 text-white group-hover:text-black group-focus:text-black" />
        </div>
        <input
          type="search"
          className="px-2 py-2 w-full bg-gray-800 hover:bg-white/100 focus:bg-white ring-0 border-transparent text-white hover:text-black focus:text-black outline-none text-sm"
          placeholder="Search for games..."
        />
      </div>
      {/* Updated div for right alignment */}
    </>
  );
};
