import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import { ReactNode } from "react";

export default function GeneralLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-[100vw] h-max p-0 m-0 flex flex-col">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
