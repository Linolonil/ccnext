"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { usePathname } from "next/navigation";


// This would normally be imported from your data file
const whatsappBaseUrl = "https://wa.me/5500000000000"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const pathname = usePathname();
  const isBlog = pathname.startsWith("/blogs")

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-expand on first appearance
  useEffect(() => {
    if (isVisible) {
      setIsExpanded(true)
      const timer = setTimeout(() => {
        setIsExpanded(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [isVisible])

 if(isBlog){return null}

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed z-50 bottom-6 right-6 flex items-center"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div className="flex items-center">
                  {/* Expanded text - shows on hover or initially */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, width: 0, x: 20 }}
                        animate={{ opacity: 1, width: "auto", x: 0 }}
                        exit={{ opacity: 0, width: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="mr-2"
                      >
                        <span className="bg-white text-green-600 font-medium py-2 px-4 rounded-l-full shadow-lg whitespace-nowrap">
                          Fale conosco
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Button with pulse effect */}
                  <motion.a
                    href={whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-colors duration-300"
                    aria-label="Fale conosco pelo WhatsApp"
                    onMouseEnter={() => setIsExpanded(true)}
                    onMouseLeave={() => setIsExpanded(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Pulse animation */}
                    <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-75"></span>

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 z-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-[#3c2a21] text-white border-0">
                <p>Fale com um advogado agora</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

