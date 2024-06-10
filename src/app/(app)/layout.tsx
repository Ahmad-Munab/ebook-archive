import { ReactNode } from "react";
import Sidebar from "./_components/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-[100vw]">
      <div className="w-[20%] sm:hidden">
        {/* Sidebar */}
        <Sidebar />
      </div>

      <main className="w-[80%]">{children}</main>
    </div>
  );
}
