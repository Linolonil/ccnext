"use client";

import Link from "next/link";
import Image from "next/image"; 
import bgHero from "../../public/bg-2.png";
import { FaGlobeAmericas } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen h-screen bg-gray-100">
      <Image src={bgHero} alt="Fundo decorativo" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center text-white flex flex-col justify-center items-center">
        <FaGlobeAmericas className="w-20 h-20 text-[#d08d58] animate-bounce animate-infinite animate-duration-3000 animate-delay-50 animate-ease-in" />
        <p className="mt-2 text-xl font-semibold text-[#d08d58]">404</p>
        <h2 className="text-2xl font-semibold mb-2">Página não encontrada</h2>
        <p className="text-gray-200 mb-6">
          Parece que a página que você está procurando não existe ou foi movida.
        </p>

        {/* Botão usando ShadCN UI */}
        <Link href="/">
          <Button className="px-6 py-2 bg-[#d08d58] text-gray-800 font-bold rounded-lg hover:bg-nude-marfim">
            Voltar para a página inicial
          </Button>
        </Link>
      </div>
    </div>
  );
}
