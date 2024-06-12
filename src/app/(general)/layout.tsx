import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import { ReactNode } from "react";

export default function GeneralLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="px-4 py-2"></div>
      <main>{children}</main>
      <div className="px-10 py-5">
        <Footer />
      </div>
    </div>
  );
}
