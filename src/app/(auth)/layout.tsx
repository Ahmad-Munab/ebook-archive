import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full h-full flex">
            <main className="h-full w-full flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mb-5">
                    Welcome to E-Book Archive
                </h1>
                {children}
            </main>
            <div className="h-full w-full flex flex-col justify-center items-center md:hidden lg:block">
                <Image
                    src="/assets/puzzles.png"
                    alt="Auth Image"
                    width={1000}
                    height={1000}
                    className="lg:h-full"
                />
            </div>
        </div>
    );
}
