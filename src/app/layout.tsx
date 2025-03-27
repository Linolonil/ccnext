import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import WhatsAppButton from "@/components/ButtonWpp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carvalho e Castro - Advogados Associados",
  description:
    "Oferecemos serviços jurídicos especializados nas áreas de Direito Tributário, Direito Civil, Direito de Família, Direito Trabalhista e muito mais. Conte com uma equipe experiente e dedicada para defender os seus interesses.",
  keywords: [
    "advocacia",
    "direito tributário",
    "direito civil",
    "direito trabalhista",
    "advogado em Manaus",
    "consultoria jurídica",
    "advogados especializados",
    "direito de família",
    "Carvalho e Castro",
    "assessoria jurídica",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "icon",
      url: "/favicon.ico",
    },
  },
  openGraph: {
    title: "Carvalho e Castro - Advogados Associados",
    description:
      "Oferecemos serviços jurídicos especializados nas áreas de Direito Tributário, Direito Civil, Direito de Família, Direito Trabalhista e muito mais. Conte com uma equipe experiente e dedicada para defender os seus interesses.",
    url: "https://carvalhoecastro-six.vercel.app",
    siteName: "Carvalho e Castro Advogados Associados",
    images: "https://carvalhoecastro-six.vercel.app/images/og-image.png",
    type: "website",
  },
  // verification: {
  //   googleSiteVerification:
  //     "google-site-verification=exampleVerificationCode12345", 
  // },
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "pt-BR/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-BR">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
         
          <NextTopLoader
            crawl={true}
            easing="ease-in-out"
            color="#532a1c"
            zIndex={99}
            showSpinner={false}
          />
          {children}
          <WhatsAppButton />
        </body>
      </html>
  );
}
