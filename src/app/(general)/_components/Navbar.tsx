import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import MobileDropdown from "./MobileDropdown";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4 md:px-12 px-2 w-full flex justify-between items-center ">
      <div className="flex gap-16 items-center">
        <Link href={"/"} className="flex gap-4 justify-center items-center">
          <Image src={"/assets/icons/logo.png"} alt="" width={60} height={60} />
          <h1 className="text-xl text-white font-bold">E-Book Archive</h1>
        </Link>

        <div className="md:flex hidden gap-6">
          <Link
            className="text-white text-xl font-normal hover:underline hover:text-white/70 transition-all duration-150"
            href={"/pricing"}
          >
            Pricing
          </Link>
          <Link
            className="text-white text-xl font-normal hover:underline hover:text-white/70 transition-all duration-150"
            href={"/about"}
          >
            About
          </Link>
          <Link
            className="text-white text-xl font-normal hover:underline hover:text-white/70 transition-all duration-150"
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="flex gap-4 ">
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
            className={buttonVariants({
              className: "text-white hidden md:block text-center",
            })}
          >
            Dashboard
          </Link>
        </SignedIn>

        <MobileDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
