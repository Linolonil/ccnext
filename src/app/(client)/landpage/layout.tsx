import React from 'react'
import Navbar from "../../../components/Navbar";
import Footer from '../../../components/Footer';

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <main>
        <Navbar />
        {children}
        <Footer/>
     </main>
  );
}
