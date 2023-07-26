import { useUser } from "@clerk/nextjs";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

export const Header = () => {
  const { user } = useUser();

  return (
    <div className="relative flex h-20 items-center justify-center bg-gray-600">
      <div className="flex-1 pl-5 text-3xl font-bold">
        {user?.firstName ? `Hello ${user.firstName}` : ""}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          {user?.firstName ? (
            <label
              tabIndex={0}
              className="btn-ghost btn-circle avatar btn "
              onClick={() => void SignOutButton}
            >
              <div className="w-10 rounded-full">
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
