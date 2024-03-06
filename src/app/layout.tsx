import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AllSidesIcon } from "@radix-ui/react-icons";
import Sidebar from "@/components/sidebar/Sidebar";
import Followbar from "@/components/followbar/Followbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "h-screen bg-black/80 ")}>
        {children}
      </body>
    </html>
  );
}
