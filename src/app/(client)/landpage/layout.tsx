import React from 'react'
import Navbar from "./components/Navbar";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <main>
        <h1>123</h1>
        <Navbar />
        {children}
     </main>
  );
}
