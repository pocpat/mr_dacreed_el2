import { useUser } from "@clerk/nextjs";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

export const Header = () => {
  const { user } = useUser();

  return (
    <div className="relative  flex h-250 w-full px-2 py-4 items-center justify-between bg-accentd">
      <div className="flex h-20 w-3/4 items-center justify-start pl-5 text-3xl font-bold text-primarydtext">
        {user?.firstName ? `Hi ${user.firstName}, welcome back.` : ""}
      </div>
      <div className="mr-3 flex h-20 w-20">
        <div className="flex h-20 w-20 items-center justify-center">
          {user?.firstName ? (
            <div className="w-full">
              <img
                className="rounded-full border-solid"
                src={user.profileImageUrl ?? ""}
                alt={user?.firstName ?? ""}
              />
            </div>
          ) : (
            <button
              className="btn-ghost rounded-btn btn-sm btn"
              onClick={() => void SignInButton}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
{!user.isSignedIn && <SignInButton mode="modal" />}
{user.isSignedIn && <SignOutButton />}
</div> */
}
