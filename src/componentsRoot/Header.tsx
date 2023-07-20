import { signIn, signOut } from "@clerk/nextjs";   
import { useUser } from '@clerk/nextjs';

export const Header = () => {
  const { user } = useUser();

  return (
    <div className="navbar bg-primary text-primary-content">  
      <div className="flex-1 pl-5 text-3xl font-bold">
        {user?.firstName ? `Notes for ${user.firstName}` : ""}
      </div>
    </div>
  );
};
