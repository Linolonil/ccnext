import React, { ReactNode } from "react";
import { Mona_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { BlogProvider } from "../../context/blog-context";
import { Sidebar } from "./components/sidebar";
import Banner from "@/components/Banner";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Legal Insights Blog | Expert Legal Analysis & Resources",
  description:
    "Stay informed with the latest legal insights, analysis, and resources from our expert team of legal professionals.",
  keywords: "legal blog, law insights, legal resources, legal analysis",
  generator: "v0.dev",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <main className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <BlogProvider>
        <Banner banner="Blog" bg={"/assets/bg-4.png"} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <main className="flex-1">{children}</main>
          </div>
          <div className="lg:col-span-1 mt-10">
            <Sidebar />
          </div>
        </div>
        </BlogProvider>
      </main> 
       );
}
