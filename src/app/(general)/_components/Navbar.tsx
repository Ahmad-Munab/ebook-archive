import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import MobileDropdown from "./MobileDropdown";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav className="bg-gray-800 py-4 md:px-12 px-2 w-full flex justify-between items-center ">
      <div className="flex gap-16 items-center">
        <Link href={"/"} className="flex gap-4 justify-center items-center">
          <Image src={"/assets/icons/logo.png"} alt="" width={60} height={60} />
          <h1 className="md:text-2xl text-md text-white font-bold">
            E-Book Archive
          </h1>
=======
    <nav className="bg-gray-900 py-4 md:px-12 px-2 w-full flex justify-between items-center ">
      <div className="flex gap-16 items-center">
        <Link href={"/"} className="flex gap-4 justify-center items-center">
          <Image src={"/assets/icons/logo.png"} alt="" width={60} height={60} />
          <h1 className="text-xl text-white font-bold">E-Book Archive</h1>
>>>>>>> bd334db4f98fc1c22118c399da302497ab5d9499
        </Link>

        <div className="md:flex hidden gap-6">
          <Link
<<<<<<< HEAD
            className="text-white text-2xl font-normal hover:underline hover:text-white/70 transition-all duration-150"
=======
            className="text-white text-xl font-normal hover:underline hover:text-white/70 transition-all duration-150"
>>>>>>> bd334db4f98fc1c22118c399da302497ab5d9499
            href={"/pricing"}
          >
            Pricing
          </Link>
          <Link
<<<<<<< HEAD
            className="text-white text-2xl font-normal hover:underline hover:text-white/70 transition-all duration-150"
=======
            className="text-white text-xl font-normal hover:underline hover:text-white/70 transition-all duration-150"
>>>>>>> bd334db4f98fc1c22118c399da302497ab5d9499
            href={"/about"}
          >
            About
          </Link>
          <Link
<<<<<<< HEAD
            className="text-white text-2xl font-normal hover:underline hover:text-white/70 transition-all duration-150"
=======
            className="text-white text-xl font-normal hover:underline hover:text-white/70 transition-all duration-150"
>>>>>>> bd334db4f98fc1c22118c399da302497ab5d9499
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="flex gap-4 ">
<<<<<<< HEAD
        <Link href={"/sign-in"}>
          {" "}
          <Button
            variant={"outline"}
            className="text-white md:text-xl text-md md:py-2 md:px-4 py-1 px-2"
          >
            Sign In
          </Button>
        </Link>
        <Link href={"/sign-up"}>
          {" "}
          <Button className="text-white md:text-xl text-md md:py-2 md:px-4 py-1 px-2">
            Get Started
          </Button>
        </Link>
=======
        <SignedOut>
          <Link href={"/sign-in"} className="md:block hidden">
            {" "}
            <Button
              variant={"outline"}
              className=" text-white text-center md:text-lg text-md md:py-1 md:px-4 py-1 px-2"
            >
              Sign In
            </Button>
          </Link>
          <Link href={"/sign-up"}>
            {" "}
            <Button className="text-white md:text-lg text-md md:py-2 md:px-4 py-1 px-2">
              Get Started
            </Button>
          </Link>
        </SignedOut>

        <SignedIn>
          <Link
            href="/app"
            className={buttonVariants({ className: "text-white", size: "lg" })}
          >
            Dashboard
          </Link>
        </SignedIn>

        <MobileDropdown />
>>>>>>> bd334db4f98fc1c22118c399da302497ab5d9499
      </div>
    </nav>
  );
};

export default Navbar;
