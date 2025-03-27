"use client"

import { useState, useEffect } from "react"
import { Instagram, Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const NAV_ITEMS = [
  { link: "Início", path: "/" },
  { link: "Serviços", path: "/services" },
  { link: "Advogados", path: "/lawyers" },
  { link: "Contatos", path: "/contacts" },
  { link: "Blog", path: "/blogs" },
] as const;

const INSTAGRAM_LINK = "https://www.instagram.com/advcarvalhocastro/";

export function Navbar() {
  const pathname = usePathname();
  const [scrollState, setScrollState] = useState({
    hasScrolled: false,
    lastScroll: 0,
    showNav: true
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const { lastScroll, showNav } = scrollState;

      let newShowNav = showNav;
      if (currentScroll === 0) {
        newShowNav = true;
      } else if (currentScroll > lastScroll && currentScroll > 50) {
        newShowNav = false;
      } else if (currentScroll < lastScroll) {
        newShowNav = true;
      }

      setScrollState({
        hasScrolled: currentScroll > 0,
        lastScroll: currentScroll,
        showNav: newShowNav
      });
    };

    handleScroll(); // Verifica a posição inicial
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollState.lastScroll, scrollState]);

  const { hasScrolled, showNav } = scrollState;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full py-2 transition-all duration-300",
        showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
        hasScrolled
          ? "bg-[#3c2a21] backdrop-blur-xl shadow-lg border-b-2 border-transparent"
          : "bg-transparent border-b-2 border-gray-500/20",
      )}
      aria-label="Navegação principal"
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center ml-10"
          aria-label="Página inicial"
        >
          <Image 
            src="/assets/logoWhite.png" 
            alt="Logo" 
            className="h-12 w-auto" 
            width={500} 
            height={500} 
            priority
          />
        </Link>

        {/* Menu Mobile */}
        <MobileMenu pathname={pathname} />

        {/* Menu Desktop */}
        <DesktopMenu pathname={pathname} />
      </div>
    </header>
  )
}

// Componente para o menu mobile
function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white mr-10"
          aria-label="Abrir menu de navegação"
        >
          <Menu className="h-6 w-6  " />
        </Button>
      </SheetTrigger>
      
      <SheetContent 
        side="right" 
        className="bg-[#3c2a21] text-white py-4 border-[#3c2a21]"
      >
        <nav className="flex flex-col items-center gap-6 mt-10 px-4">
          {NAV_ITEMS.map(({ path, link }) => (
            <NavLink 
              key={path}
              path={path}
              link={link}
              pathname={pathname}
              mobile
            />
          ))}
          <SocialLink />
        </nav>
      </SheetContent>
    </Sheet>
  )
}

// Componente para o menu desktop
function DesktopMenu({ pathname }: { pathname: string }) {
  return (
    <nav className="hidden lg:flex items-center space-x-6">
      {NAV_ITEMS.map(({ path, link }) => (
        <NavLink 
          key={path}
          path={path}
          link={link}
          pathname={pathname}
        />
      ))}
      <SocialLink />
    </nav>
  )
}

// Componente para links de navegação
function NavLink({ 
  path, 
  link, 
  pathname,
  mobile = false 
}: { 
  path: string, 
  link: string, 
  pathname: string,
  mobile?: boolean 
}) {
  return (
    <Link
      href={path}
      className={cn(
        "font-medium transition-colors hover:text-[#e5e5cb]",
        mobile ? "text-2xl" : "text-lg",
        pathname === path 
          ? mobile 
            ? "text-[#d08d58] font-bold" 
            : "text-[#d08d58] font-bold underline decoration-2 underline-offset-8"
          : "text-white",
      )}
      aria-current={pathname === path ? "page" : undefined}
    >
      {link}
    </Link>
  )
}

// Componente para o link social
function SocialLink() {
  return (
    <a
      href={INSTAGRAM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-white hover:text-[#e5e5cb] transition-colors",
        "flex items-center gap-2 hover:scale-110"
      )}
      aria-label="Instagram"
    >
      <Instagram className="h-5 w-5 md:h-6 md:w-6" />
    </a>
  )
}

export default Navbar