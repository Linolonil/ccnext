"use client"

import { useState, useEffect } from "react"
import { Instagram } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)
  const [showNav, setShowNav] = useState(true)

  const pathname = usePathname()


  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll === 0) {
        setShowNav(true)
      } else if (currentScroll > lastScroll && currentScroll > 50) {
        setShowNav(false)
      } else if (currentScroll < lastScroll) {
        setShowNav(true)
      }

      setLastScroll(currentScroll)
      setHasScrolled(window.scrollY > 0)
    }

    // Verifica a posição do scroll ao montar o componente
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScroll])

  const navItems = [
    { link: "Início", path: "/" },
    { link: "Serviços", path: "/services" },
    { link: "Advogados", path: "/lawyers" },
    { link: "Contatos", path: "/contacts" },
    { link: "Blog", path: "/blogs" },
  ]

  return (
    <div
      className={cn(
        "fixed top-0 z-50 w-full py-2 transition-all duration-300",
        showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
        hasScrolled
          ? "bg-[#3c2a21] backdrop-blur-xl shadow-lg border-b-2 border-transparent"
          : "bg-transparent border-b-2 border-gray-500/20",
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo - Mobile and Desktop */}
        <Link href="/" className="flex items-center ml-10">
          <Image src="/assets/logoWhite.png" alt="Logo" className="h-12 w-auto" width={500} height={500} />
        </Link>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#3c2a21] text-white">
            <nav className="flex flex-col gap-6 mt-10 ">
              {navItems.map(({ path, link }) => (
                <Link
                  key={path}
                  href={path}
                  className={cn(
                    "text-2xl font-medium transition-colors hover:text-[#e5e5cb]",
                    pathname === path ? "text-[#d08d58] font-bold" : "",
                  )}
                >
                  {link}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/advcarvalhocastro/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xl hover:text-[#e5e5cb] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map(({ path, link }) => (
            <Link
              key={path}
              href={path}
              className={cn(
                "text-lg font-medium transition-colors hover:text-[#e5e5cb]",
                pathname === path ? "text-[#d08d58] font-bold underline decoration-2 underline-offset-8" : "text-white",
              )}
            >
              {link}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/advcarvalhocastro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#e5e5cb] transition-transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Navbar