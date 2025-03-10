"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FaBalanceScale, FaUsers, FaStar } from "react-icons/fa"

const statsData = [
  {
    id: 1,
    icon: <FaBalanceScale className="h-8 w-8" />,
    title: "Casos resolvidos",
    value: "500+",
    description: "Casos resolvidos com sucesso e eficiência.",
  },
  {
    id: 2,
    icon: <FaUsers className="h-8 w-8" />,
    title: "Advogados experientes",
    value: "5+",
    description: "Anos de experiência jurídica combinada.",
  },
  {
    id: 3,
    icon: <FaStar className="h-8 w-8" />,
    title: "Excelência reconhecida",
    value: "5.0",
    description: "Avaliação média de nossos clientes.",
  },
]

function StatsHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full flex justify-center items-center z-10 transform translate-y-20"
    >
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <Card className="border border-gray-800/20 overflow-hidden shadow-lg bg-[#3c2a21] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Subtle gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d08d58]/20 to-[#d08d58]/5 opacity-30"></div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-16 h-1 bg-[#d08d58]"></div>

                    <div className="relative z-10 p-6">
                      {/* Header with icon and title */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#d08d58]/10 text-[#d08d58]">
                          {stat.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-white">{stat.title}</h3>
                      </div>

                      {/* Divider */}
                      <div className="w-full h-px bg-[#d08d58]/20 my-4"></div>

                      {/* Value and description */}
                      <div className="space-y-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-[#d08d58]">{stat.value}</span>
                          {stat.id === 3 && <span className="text-white/80 text-sm">(de 5.0)</span>}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{stat.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default StatsHero

