"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight, Briefcase, Scale, Building, Home, FileText, Users } from "lucide-react"
import SectionDivider from "./SectionDivider"

// This would normally be imported from your data file
const whatsappBaseUrl = "https://wa.me/5500000000000"

const areasInfoBreaker = [
  {
    id: 1,
    icon: <Briefcase className="h-10 w-10" />,
    title: "Direito Civil",
    description: ["Contratos e obrigações", "Responsabilidade civil", "Direito do consumidor", "Ações indenizatórias"],
    message: "Olá, gostaria de informações sobre serviços de Direito Civil.",
  },
  {
    id: 2,
    icon: <Scale className="h-10 w-10" />,
    title: "Direito Trabalhista",
    description: [
      "Reclamações trabalhistas",
      "Acordos e negociações",
      "Direitos do empregado",
      "Rescisões contratuais",
    ],
    message: "Olá, gostaria de informações sobre serviços de Direito Trabalhista.",
  },
  {
    id: 3,
    icon: <Building className="h-10 w-10" />,
    title: "Direito Empresarial",
    description: ["Constituição de empresas", "Contratos empresariais", "Fusões e aquisições", "Recuperação judicial"],
    message: "Olá, gostaria de informações sobre serviços de Direito Empresarial.",
  },
  {
    id: 4,
    icon: <Home className="h-10 w-10" />,
    title: "Direito Imobiliário",
    description: ["Contratos de compra e venda", "Locações e despejos", "Usucapião", "Regularização de imóveis"],
    message: "Olá, gostaria de informações sobre serviços de Direito Imobiliário.",
  },
  {
    id: 5,
    icon: <FileText className="h-10 w-10" />,
    title: "Direito Tributário",
    description: ["Planejamento tributário", "Defesas administrativas", "Execuções fiscais", "Recuperação de tributos"],
    message: "Olá, gostaria de informações sobre serviços de Direito Tributário.",
  },
  {
    id: 6,
    icon: <Users className="h-10 w-10" />,
    title: "Direito de Família",
    description: ["Divórcio e separação", "Pensão alimentícia", "Guarda e adoção", "Inventário e sucessões"],
    message: "Olá, gostaria de informações sobre serviços de Direito de Família.",
  },
]

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
    <section id="areas-de-atuacao" className="py-20 mt-20 bg-gray-50">
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
              <Card className="h-full border border-gray-200 overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#d08d58]"></div>

                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-[#d08d58]/10 text-[#d08d58]">{area.icon}</div>
                  </div>
                  <CardTitle className="text-xl text-center text-[#3c2a21] font-semibold">{area.title}</CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2 text-gray-700">
                    {area.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#d08d58] font-bold">•</span>
                        <span className="text-gray-700">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-2 pb-4 flex justify-center">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#d08d58] text-[#d08d58] hover:bg-[#d08d58] hover:text-white transition-colors duration-300"
                  >
                    <a
                      href={`${whatsappBaseUrl}?text=${encodeURIComponent(area.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Consultar</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
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

