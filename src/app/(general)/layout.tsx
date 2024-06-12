import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import { ReactNode } from "react";

export default function GeneralLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
