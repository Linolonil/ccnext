import React, { ReactNode } from "react";
import { Mona_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Banner from "@/components/Banner";
import { Sidebar } from "./components/sidebar";

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
    <main
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
        <Banner banner="Blog" bg={"/assets/bg-4.png"} />

        <div className="container mx-auto px-4 py-8 w-full">
  <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-20">
    {/* Conteúdo Principal - Sempre primeiro no fluxo (mobile e desktop) */}
    <div className="lg:col-span-8 order-1">{children}</div>

    {/* Sidebar - Aparece depois no mobile, sticky no desktop */}
    <div className="lg:col-span-4 lg:top-20 order-2">
      <Sidebar />
    </div>
  </div>
</div>
    </main>
  );
}
