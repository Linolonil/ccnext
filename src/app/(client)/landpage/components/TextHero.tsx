"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { LeadCaptureForm } from "./leadCaptureForm"
import TypingAnimation from "./typeWriting"

function TextHero() {
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [isInView, setIsInView] = useState(false)

  const handleOpenLeadForm = () => setShowLeadForm(true)
  const handleCloseLeadForm = () => setShowLeadForm(false)

  useEffect(() => {
    setIsInView(true)
  }, [])
  console.log(isInView)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-neutral-content space-y-8 lg:w-1/2 h-full flex flex-col justify-center lg:items-start md:pb-28"
    >
      <h1 className="w-full  text-4xl sm:text-5xl lg:text-5xl font-semibold text-white leading-tight">
        <TypingAnimation />
        Soluções Jurídicas de
        <br />
        <span className="text-[#d08d58] font-bold">Confiança e Excelência</span>
      </h1>

      <p className="text-lg text-gray-200 leading-relaxed max-w-md mx-auto lg:mx-0 lg:text-left">
        Atuamos com dedicação e transparência para oferecer o melhor suporte jurídico. Nossa equipe é preparada para
        resolver seu caso com segurança e competência.
      </p>

      <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
        {showLeadForm && <LeadCaptureForm onClose={handleCloseLeadForm} />}

        <Button
          onClick={handleOpenLeadForm}
          className="px-6 py-6 bg-[#d08d58] hover:bg-[#b87a4a] text-white text-lg font-medium rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <FaWhatsapp className="mr-2 h-5 w-5" />
          Fale com um advogado
        </Button>

        <Button
          variant="link"
          asChild
          className="text-white hover:text-[#d08d58] text-lg font-semibold transition-colors duration-300"
        >
          <a href="/services" className="flex items-center gap-2">
            Saiba mais
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </Button>
      </div>
    </motion.div>
  )
}

export default TextHero

