import { useUser } from "@clerk/nextjs";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

export const Header = () => {
  const { user } = useUser();

  return (
    <div className="relative flex h-20 items-center justify-center">
      <div className="w-3/4 pl-5 text-3xl font-bold text-[#0F5475]">
        {user?.firstName ? `Hi ${user.firstName}, welcome back.` : ""}
      </div>
      <div className="flex-none gap-2 bg-white">
        <div className="dropdown-end dropdown w-full">
          {user?.firstName ? (
            <label
              tabIndex={0}
              className="btn-ghost btn-circle avatar btn "
              onClick={() => void SignOutButton}
            >
              <div className="w-4/6 bg-white">
                <img
                  src={user.profileImageUrl ?? ""}
                  alt={user?.firstName ?? ""}
                />
              </div>
            </label>
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
