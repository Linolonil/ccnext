import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '@/components/ButtonWpp';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <main>
        <Navbar />
        {children}
        <WhatsAppButton/>  
        <Footer/>
     </main>
  );
}
