import Head from "next/head";
import Link from "next/link";
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import { type NextPage } from "next";
import { Header } from "../componentsRoot/Header";
import Bird from "~/componentsRoot/Bird";
import Image from "next/image";
import FooterBird from "~/componentsRoot/FooterBird";

const Home: NextPage = () => {
  console.log("Rendering Home component");
  const user = useUser();
  return (
    <>
      <main className="flex flex-col min-h-screen items-center p-0 m-o">
        <Header  />
        <Image
          src="/bg_1.jpg"
          alt="bg"
          layout="fill"
          objectFit="cover"
          className="z-[-2] "
        />

        <div className="flex flex-col items-center justify-center w-screen  gap-12 pb-4 pt-40">
          {/* logo */}
          <div
            className="birdBG left-0   w-screen    bg-white/20 py-16 "
            style={{ width: "100%" }}
          >
            <div className="flex h-20 flex-col items-center justify-center gap-4"></div>
            <Bird />
            <div className="flex h-10 flex-col items-center justify-center gap-4"></div>
          </div>

          {/*     buttons   */}
          <div className="flex-1 flex  flex-col items-center justify-center gap-4 sm:grid-cols-2 md:gap-8 ">
            <div className="flex flex-row items-center justify-center gap-2 ">
              {/* <Link */}
              <a
                // className="bg flex w-48 max-w-xs flex-col items-center rounded-full bg-[#0F5475] p-4 normal-case text-white drop-shadow-md file:gap-2 hover:bg-white/50"
                className="bg flex h-10 w-48 max-w-xs flex-col items-center justify-center rounded-full  bg-[#0F5475] p-7 normal-case text-white drop-shadow-md  hover:bg-white/20"
                href="input/input"
              >
                <h3 className="text-xl ">Next</h3>
              </a>
              {/* </Link> */}

              {/* <Link*/}

              {/* <Link    // LIBRARY BUTTON

              className="bg- flex max-w-xs flex-col gap-4 rounded-xl bg-[#7ebfb3] p-4 text-white drop-shadow-md hover:bg-white/50"
              href="/namedLibrary/namedLibrary"
            >
              <h3 className="text-2xl font-bold">LIBRARY</h3>

            </Link>   */}
              {/* </div> */}
              <div className="flex flex-col items-center gap-2 ">
                <div
                  className="bg flex w-48 max-w-xs flex-col items-center rounded-full
             bg-[#0F5475] p-4 normal-case text-white drop-shadow-md file:gap-4
              hover:bg-white/20"
                >
                  {!user.isSignedIn && <SignInButton mode="modal" />}
                  {user.isSignedIn && <SignOutButton />}
                </div>
              </div>
            </div>
          </div>
         
        
        <div>
          <FooterBird height={30} />
          </div>
          </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { user } = useUser();
  if (user) {
    return (
      <div className="text-2xl font-bold text-white">
        <h1>Hi {user.fullName}, welcome back.</h1>
      </div>
    );
  }
  return (
    <div>
      <p className="text-2xl font-bold text-white">
        There are no current users signed in.
      </p>
    </div>
  );
};
export { AuthShowcase };




//===========
          {/* logo */}
          // <div
          //   className="birdBG left-0 top-1/3 z-10 w-screen    bg-white/20 py-15 "
          //   style={{ width: "100%" }}
          // >
          //   <div className="flex h-20 flex-col items-center justify-center gap-4"></div>
          //   <Bird />
          //   <div className="flex h-10 flex-col items-center justify-center gap-4"></div>
          // </div>
