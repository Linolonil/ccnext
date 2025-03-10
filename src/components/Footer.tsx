"use client"

import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const pathname = usePathname()

  const isLoginOrDashboard = pathname.startsWith("/login") || pathname.startsWith("/dashboard")

  if (isLoginOrDashboard) {
    return null
  }

  return (
    <footer className="bg-[#3c2a21] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About & Logo */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logoWhite.png"
                alt="Carvalho & Castro Advogados"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 mt-4 text-sm">
              Oferecemos soluções jurídicas personalizadas com excelência e compromisso, garantindo a defesa dos seus
              direitos e interesses.
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href="https://www.instagram.com/advcarvalhocastro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[#d08d58] transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
           
          
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold relative inline-block">
              Áreas de Atuação
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d08d58]"></span>
            </h3>
            <ul className="space-y-2 mt-4">
              {[
                { name: "Direito Civil", href: "/services" },
                { name: "Direito Trabalhista", href: "/services" },
                { name: "Direito Imobiliário", href: "/services" },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-[#d08d58] transition-colors duration-200 flex items-center gap-1 text-sm"
                  >
                    <FaArrowRight className="h-3 w-3" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold relative inline-block">
              Links Rápidos
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d08d58]"></span>
            </h3>
            <ul className="space-y-2 mt-4">
              {[
                { name: "Início", href: "/" },
                { name: "Serviços", href: "/services" },
                { name: "Advogados", href: "/lawyers" },
                { name: "Blog", href: "/blogs?page=1" },
                { name: "Contato", href: "/contacts" },
                { name: "Política de Privacidade", href: "/privacy" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#d08d58] transition-colors duration-200 flex items-center gap-1 text-sm"
                  >
                    <FaArrowRight className="h-3 w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold relative inline-block">
              Contato
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d08d58]"></span>
            </h3>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <FaPhone className="h-4 w-4 mt-1 text-[#d08d58]" />
                <span className="text-gray-300 text-sm">(92) 99432-2782</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="h-4 w-4 mt-1 text-[#d08d58]" />
                <span className="text-gray-300 text-sm">adv.carvalhocastro@gmail.com</span>
              </li>
            
            </ul>

            <div className="mt-6 space-y-3">
              <h4 className="text-sm font-medium">Receba nossas novidades</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-[#d08d58]"
                />
                <Button className="bg-[#d08d58] hover:bg-[#b87a4a] text-white">
                  <FaArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              ©2025 Carvalho & Castro Advogados Associados. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="text-gray-400 hover:text-[#d08d58] text-sm transition-colors duration-200">
                Termos de Uso
              </Link>
              <Separator orientation="vertical" className="h-4 bg-white/20" />
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#d08d58] text-sm transition-colors duration-200"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

