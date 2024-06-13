import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ToastContextProvider from "@/providers/ToastProvider";
import "react-toastify/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Book Archive | Digital Course Platform",
  description:
    "A Platform for Developers to Learn New Skills and Technologies through PDF-Formatted Courses. Learn for Free with the Option to Upgrade to Our Premium Packages!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="no-scrollbar">
        <body className={inter.className}>
          {children}
          <ToastContextProvider />
        </body>
      </html>
    </ClerkProvider>
  );
}
