"use client";

import { cn } from "@/lib/utils";
import {
  Gamepad2,
  Home,
  Joystick,
  Rocket,
  Star,
  Trophy,
  UserRound,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const routes = [
    {
      icon: Home,
      href: "/",
      label: "Home",
      pro: false,
    },
    {
      icon: Star,
      href: "/reviews",
      label: "Reviews",
      pro: false,
    },
    {
      icon: UserRound,
      href: "/profile",
      label: "Profile",
      pro: false,
    },
    {
      icon: Rocket,
      href: "/newreleases",
      label: "New Releases",
      pro: false,
    },
    {
      icon: Trophy,
      href: "/topgames",
      label: "Top",
      pro: false,
    },
    {
      icon: Joystick,
      href: "/allgames",
      label: "All Games",
      pro: false,
    },
    {
      icon: Gamepad2,
      href: "/platforms",
      label: "Platforms",
      pro: false,
    },
  ];
  const onNavigate = (url: string, pro: boolean) => {
    return router.push(url);
  };

  return (
    <div className="space-y-4 pt-24 flex flex-col h-full text-primary lg:w-64 w-full">
      <div className="p-3 flex flex-1 justify-between">
        <div className="space-y-4">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.href, route.pro)}
              key={route.href}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover: bg-primary/10 rounded-lg transition",
                pathname === route.href && "bg-primary/10 text-primary"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <route.icon className="h-5 w-5" />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
