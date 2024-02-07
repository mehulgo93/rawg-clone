import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export const Actions = async () => {
  const user = await currentUser();
  return (
    <div className="flex items-center gap-x-3 justify-end">
      <ModeToggle />
      {!user && (
        <SignInButton>
          <Button size="sm" variant="primary">
            Login
          </Button>
        </SignInButton>
      )}
      {!!user && <UserButton afterSignOutUrl="/" />}
    </div>
  );
};

{
  /* <div className="flex items-center gap-x-3 justify-end">
<ModeToggle />
<UserButton afterSignOutUrl="/" />
</div> */
}
