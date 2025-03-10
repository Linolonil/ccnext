"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  FaArrowRight,
  FaWhatsapp,
  FaCheck
} from "react-icons/fa"
import SectionDivider from "./SectionDivider"
import { areasInfoBreaker } from "../../(constants)/areasInfoBreakerTexts"

// This would normally be imported from your data file
const whatsappBaseUrl = "https://wa.me/559294322782"




export default function InfoBreaker() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="areas-de-atuacao" className="py-20 mt-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionDivider title="Áreas de Atuação" subtitle="Conheça nossas especialidades jurídicas" />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {areasInfoBreaker.map((area) => (
            <motion.div key={area.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_35px_rgba(208,141,88,0.1)] transition-all duration-500 group ">                     
                <CardHeader className="pt-8 pb-4">
                  <div className="flex justify-center mb-6 relative">
                    <div className="p-4 rounded-xl  bg-[#3c2a21] text-white shadow-lg transform group-hover:scale-110 transition-transform duration-500"> 
                      {area.icon}
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-[#d08d58]/20 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
                  </div>
                  <CardTitle className="text-2xl text-center text-[#3c2a21] font-bold relative inline-flex justify-center w-full">
                    {area.title}
                    <span className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-[#d08d58]/30 rounded-full"></span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-4">
                  <ul className="space-y-3 text-gray-700">
                    {area.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <span className="mt-0.5 flex-shrink-0 p-1 rounded-full bg-[#d08d58]/10 text-[#d08d58] group-hover/item:bg-[#d08d58] group-hover/item:text-white transition-colors duration-300">
                          <FaCheck className="h-3 w-3" />
                        </span>
                        <span className="text-gray-700 font-medium">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6 pb-8 px-6">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-[#3c2a21] to-[#3c2a21] hover:from-[#d08d58] hover:to-[#b87a4a] text-white shadow-md group-hover:shadow-lg transition-all duration-300"
                  >
                    <a
                      href={`${whatsappBaseUrl}?text=${encodeURIComponent(area.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-6"
                    >
                      <FaWhatsapp className="h-5 w-5 group-hover:animate-pulse" />
                      <span className="font-medium">Consultar Especialista</span>
                      <FaArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div> 
      </div>
    </section>
  )
}
