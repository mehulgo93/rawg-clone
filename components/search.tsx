import { UserButton } from "@clerk/nextjs";
import { SearchIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export const Search = () => {
  return (
    <>
      <div className="flex ml-2 border-2 w-full border-gray-600 hover:bg-white bg-gray-200 rounded-full overflow-hidden ">
        <SearchIcon className="flex text-gray-300 ml-3 mt-1.5 " />
        <input
          type="search"
          className="px-2 py-1 w-full bg-gray-200 hover:bg-white focus:border-transparent focus:outline-none text-gray-700 text-sm"
          placeholder="Search for games..."
        />
      </div>
      =
      <div className="flex items-center gap-x-3">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};
