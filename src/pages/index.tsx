import Head from "next/head";
import Link from "next/link";
import {
  useUser,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { type NextPage } from "next";
import { Header } from "../componentsRoot/Header";
import Bird from "~/componentsRoot/Bird";
import Image from "next/image";
import FooterMain from "~/componentsRoot/FooterMain";
import { useState } from "react";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  console.log("Rendering Home component");
  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const [showButton, setShowButton] = useState(false);
  const { mutate: creatNewUser } = api.newUser.create.useMutation();

  const AddNewUser = () => {
    creatNewUser({ user });
    console.log(user);
    setShowButton(true);
  };

  const ShowButton = () => {
    return (
      <div>
        {" "}
        <button
          onClick={() => {
            setShowModal(false);
          }}
          className="mt-4 rounded-md bg-green-500 px-4 py-1 text-white"
        >
          Done
        </button>
      </div>
    );
  };

  const NewUserModal = () => {
    return (
      <div className="inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="mt-38 m-40 w-3/5 rounded-xl bg-white p-8">
            <div className="p-41 flex flex-row items-center justify-items-center text-lg">
              <div className="w-3/5">
                <span> Hi {user?.firstName}, your GitHub user ID is:</span>
                <div className="mb-4 mt-4 w-2/3 rounded-lg border-solid border-black bg-[#0F5475] p-2 text-white">
                  {user?.id}
                </div>
                <span>
                  Please click the button below to add yourself to the database
                  as a new user.
                </span>
                <div className="flex w-3/4 flex-col items-start justify-between">
                  <button
                    onClick={AddNewUser}
                    className="focus:bg-red mt-4 rounded-lg bg-[#0F5475] p-2 text-base text-white hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-green-600"
                  >
                    Add me:
                  </button>
                  {showButton && <ShowButton />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Image
        src="/bg_1.jpg"
        alt="bg"
        layout="fill"
        objectFit="cover"
        className="z-[-2]"
      />
      <Head>
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center  ">
        <div className="m-0 flex w-screen flex-col items-center justify-center  gap-12 pb-4 pt-40">
          {/* logo */}
          <div
            className="birdBG left-0 top-1/3 z-10 w-screen items-center justify-center   bg-white/20 py-20 "
            style={{ width: "100%" }}
          >
            <div className="flex h-20 flex-col items-center justify-center gap-4"></div>
            <Bird />
            <div className="flex h-10 flex-col items-center justify-center gap-4"></div>
          </div>

          {/*     buttons   */}
          <div className="flex  flex-col items-center justify-center gap-4 sm:grid-cols-2 md:gap-8 ">
            <div className="flex flex-row items-center justify-center gap-2 ">
              {/* <Link */}
              <a
                // className="bg flex w-48 max-w-xs flex-col items-center rounded-full bg-[#0F5475] p-4 normal-case text-white drop-shadow-md file:gap-2 hover:bg-white/50"
                className="flex h-10 w-48 max-w-xs flex-col items-center justify-center rounded-full bg-[#0F5475] p-7 normal-case text-white drop-shadow-md  hover:bg-white/20"
                href="input/input"
              >
                <h3 className="text-xl ">Next</h3>
              </a>

              {showModal && <NewUserModal />}

              <div className="flex flex-row items-center gap-2">
                <div className="flex w-48 max-w-xs flex-col items-center rounded-full bg-[#0F5475] p-4 normal-case text-white drop-shadow-md file:gap-4 hover:bg-white/20">
                  <SignedIn>
                    <SignOutButton />
                  </SignedIn>
                  <SignedOut>
                    <SignInButton mode="modal" />
                  </SignedOut>
                </div>
                <SignedIn>
                  <button
                    onClick={handleClick}
                    className="flex w-48 max-w-xs flex-col items-center rounded-full bg-[#0F5475] p-4 normal-case text-white drop-shadow-md file:gap-4 hover:bg-white/20"
                  >
                    Add new user
                  </button>
                </SignedIn>
              </div>
            </div>
            <div className="z-0 m-8">
              <FooterMain />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { user } = useUser();
//   if (user) {
//     return (
//       <div className="text-2xl font-bold text-white">
//         <h1>Hi {user.fullName}, welcome back...boooiiiiii.</h1>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <p className="text-2xl font-bold text-white">
//         There are no current users signed in.
//       </p>
//     </div>
//   );
// };
// export { AuthShowcase };
