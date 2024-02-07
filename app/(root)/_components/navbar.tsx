"us client";

import { Search } from "@/components/search";
import Link from "next/link";
import { Actions } from "../../../components/actions";
import { useScrollTop } from "../../../components/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Header } from "./header";

export const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full h-20 px-2 lg:px-4 flex justify-between items-center",
          scrolled && "border-b shadow-sm"
        )}
      >
        {/* <!-- Logo on the left --> */}
        <div className="flex items-center">
          <Link href="/">
            <h1 className="dark:text-white text-2xl font-bold tracking-wider mr-4 text-black">
              RAW<span className="text-red-500">G</span>
            </h1>
          </Link>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <Search />
          <Actions />
        </div>
      </nav>
    </>
  );
};
