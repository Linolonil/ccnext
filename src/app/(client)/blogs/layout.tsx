import React, { ReactNode } from "react";
import { Mona_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { BlogProvider } from "../context/blog-context";


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
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
          </div>
        </BlogProvider>
      </main> 
       );
}
