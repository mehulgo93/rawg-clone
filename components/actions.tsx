"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { useConvexAuth } from "convex/react";
import { Spinner } from "./spinners";

export const Actions = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="flex items-center gap-x-3 justify-end">
      <ModeToggle />
      {isLoading && <Spinner />}
      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode="modal">
            <Button variant="primary" size="sm">
              Log In
            </Button>
          </SignInButton>
        </>
      )}
      {isAuthenticated && (
        <div>
          <UserButton />
        </div>
      )}
    </div>
  );
};
