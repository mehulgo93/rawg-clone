"use client";

import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <>
      <div className="flex ml-2 border-2 w-[85%] border-gray-600 hover:bg-white bg-gray-200 rounded-full overflow-hidden">
        <SearchIcon className="text-gray-300 ml-3 mt-2" />
        <input
          type="search"
          className="px-2 py-2 w-full bg-gray-200 focus:bg-white focus:ring-0 focus:border-transparent focus:outline-none text-gray-700 text-sm"
          placeholder="Search for games..."
        />
      </div>
      {/* Updated div for right alignment */}
    </>
  );
};
