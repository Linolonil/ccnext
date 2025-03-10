"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Users, Award, Scale } from "lucide-react"
import SectionDivider from "./SectionDivider"
import { aboutTexts } from "../../(constants)/aboutTextsConstants"

// This would normally be imported from your data file
const whatsappBaseUrl = "https://wa.me/559294322782"



export default function AboutComponent() {
  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/assets/bg-about.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-darkBrown/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <SectionDivider title="Sobre Nós" subtitle="Conheça nossa história e valores" className="text-white"  styless="text-gray-300" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Left column - About card */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 overflow-hidden bg-white/95 backdrop-blur-sm shadow-xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#d08d58]"></div>

              <CardContent className="p-8">
                {aboutTexts.map((text, index) => (
                  <motion.p
                    key={text.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-700 mb-6 leading-relaxed"
                  >
                    {index === 0 && (
                      <span className="text-[#d08d58] text-xl font-semibold block mb-2">Nossa História</span>
                    )}
                    {text.content}
                  </motion.p>
                ))}

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Button asChild className="bg-[#d08d58] hover:bg-[#b87a4a] text-white px-6 py-6 text-lg shadow-md">
                    <a
                      href={whatsappBaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageSquare className="h-5 w-5" />
                      Falar com um especialista
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right column - Values and mission */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {/* Values card */}
              <Card className="border-0 overflow-hidden bg-white/95 backdrop-blur-sm shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-[#d08d58]/10 text-[#d08d58]">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#3c2a21]">Nossos Valores</h3>
                  </div>

                  <ul className="space-y-3">
                    {["Ética", "Excelência", "Compromisso", "Transparência", "Dedicação"].map((value, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-[#d08d58] font-bold">•</span>
                        <span className="text-gray-700">{value}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Mission card */}
              <Card className="border-0 overflow-hidden bg-white/95 backdrop-blur-sm shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-[#d08d58]/10 text-[#d08d58]">
                      <Scale className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#3c2a21]">Nossa Missão</h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Oferecer soluções jurídicas eficientes e personalizadas, contribuindo para a segurança jurídica e o
                    sucesso de nossos clientes, sempre pautados pela ética e excelência profissional.
                  </p>
                </CardContent>
              </Card>

              {/* Team card */}
              <Card className="border-0 overflow-hidden bg-white/95 backdrop-blur-sm shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-[#d08d58]/10 text-[#d08d58]">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#3c2a21]">Nossa Equipe</h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Contamos com profissionais especializados em diversas áreas do Direito, prontos para atender às suas
                    necessidades.
                  </p>

                  <Button
                    variant="outline"
                    asChild
                    className="w-full border-[#d08d58] text-[#d08d58] hover:bg-[#d08d58] hover:text-white"
                  >
                    <a href="/lawyers">Conheça nossos advogados</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

