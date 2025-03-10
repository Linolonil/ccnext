"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaWhatsapp, FaChevronDown, FaChevronUp } from "react-icons/fa"
import type { IconType } from "react-icons"

interface ServiceCardProps {
  icon: IconType
  title: string
  description?: string[]
  subTitle?: string[]
  phoneNumber: string
  moreInfo?: string[]
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description = [],
  subTitle = [],
  phoneNumber,
  moreInfo = [],
}: ServiceCardProps) => {
  const [openSection, setOpenSection] = useState<number | null>(null)

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index)
  }

  // Ensure we have valid arrays to map over
  const safeMoreInfo = Array.isArray(moreInfo) ? moreInfo : []
  const safeSubTitle = Array.isArray(subTitle) ? subTitle : []
  const safeDescription = Array.isArray(description) ? description : []

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      {/* Card header with icon and title */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#3c2a21] to-[#d08d58] rounded-lg flex items-center justify-center shadow-md">
            <Icon className="text-2xl text-white" />
          </div>
          <h3 className="text-xl font-bold text-[#3c2a21]">{title}</h3>
        </div>
      </div>

      {/* Card content with collapsible sections */}
      <div className="p-6 flex-grow">
        {safeMoreInfo.length > 0 ? (
          <ul className="space-y-4">
            {safeMoreInfo.map((info, index) => (
              <li key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Section header */}
                <div
                  onClick={() => toggleSection(index)}
                  className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <h4 className="font-medium text-[#3c2a21]">{safeSubTitle[index] || `Seção ${index + 1}`}</h4>
                  <div className="text-[#d08d58]">{openSection === index ? <FaChevronUp /> : <FaChevronDown />}</div>
                </div>

                {/* Collapsible content */}
                <AnimatePresence>
                  {openSection === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 border-t border-gray-200">
                        <p className="text-gray-700 mb-3">{safeDescription[index] || ""}</p>
                        <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-600">{info}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-gray-500 text-center py-4">Nenhuma informação adicional disponível.</div>
        )}
      </div>

      {/* Card footer with WhatsApp button */}
      <div className="p-6 pt-2 mt-auto border-t border-gray-100 flex justify-end">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`https://wa.me/${phoneNumber}?text=Olá, gostaria de saber mais sobre ${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#d08d58] hover:bg-[#b87a4a] text-white py-2.5 px-5 rounded-md transition-colors duration-300 font-medium"
        >
          <span>Falar com especialista</span>
          <FaWhatsapp className="text-lg" />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default ServiceCard