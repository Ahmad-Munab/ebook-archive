import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

function MobileDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={"outline"}
                    className="md:hidden text-white md:text-lg text-md md:py-2 md:px-4 py-1 px-2"
                >
                    <Menu className="h-6 w-6" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="md:hidden flex flex-col bg-gray-800 py-3 px-2 rounded-md shadow-lg">
                <DropdownMenuItem asChild>
                    <Link
                        href={"/sign-in"}
                        className="text-white pt-1 pb-1 text-lg font-normal hover:underline hover:text-white/70 transition-all duration-150"
                    >
                        {" "}
                        Sign In
                    </Link>
                </DropdownMenuItem>
                <hr />
                <DropdownMenuItem asChild>
                    <Link
                        className="text-white pt-4 pb-1 text-lg font-normal hover:underline hover:text-white/70 transition-all duration-150"
                        href={"/pricing"}
                    >
                        Pricing
                    </Link>
                </DropdownMenuItem>
                <hr />

                <DropdownMenuItem asChild>
                    <Link
                        className="text-white pt-4 pb-1 text-lg font-normal hover:underline hover:text-white/70 transition-all duration-150"
                        href={"/about"}
                    >
                        About
                    </Link>
                </DropdownMenuItem>
                <hr />

                <DropdownMenuItem asChild>
                    <Link
                        className="text-white pt-4 pb-1 text-lg font-normal hover:underline hover:text-white/70 transition-all duration-150"
                        href={"/contact"}
                    >
                        Contact
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default MobileDropdown;
