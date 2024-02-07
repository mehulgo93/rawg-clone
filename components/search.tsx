import { UserButton } from "@clerk/nextjs";
import { SearchIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export const Search = () => {
  return (
    <>
      <div className="flex ml-2 border-2 w-full border-gray-600 hover:bg-white bg-gray-200 rounded-full overflow-hidden">
        <SearchIcon className="text-gray-300 ml-3 mt-1" />
        <input
          type="search"
          className="px-2 py-1 w-full bg-gray-200 focus:bg-white focus:ring-0 focus:border-transparent focus:outline-none text-gray-700 text-sm"
          placeholder="Search for games..."
        />
      </div>
      {/* Updated div for right alignment */}
      <div className="flex items-center gap-x-3 justify-end">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};
