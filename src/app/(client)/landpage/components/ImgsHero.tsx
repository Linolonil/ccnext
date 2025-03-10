"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserRound, Award, ArrowRight } from "lucide-react"

function ImgsHero() {
  const lawyers = [
    {
      id: 1,
      name: "Dr. Carvalho",
      image: "/adv2.jpeg",
      experience: "4 anos de experiência",
      oab: "OAB/AM 18.565",
    },
    {
      id: 2,
      name: "Dr. Castro",
      image: "/adv1.jpeg",
      experience: "5 anos de experiência",
      oab: "OAB/AM 18.092",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="lg:w-1/2 flex justify-center items-center w-full h-full"
    >
      <div className="relative flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
        {lawyers.map((lawyer, index) => (
          <motion.div
            key={lawyer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            className="w-full sm:w-[80%] lg:w-[48%]"
          >
            <Card className="relative overflow-hidden  border-0 bg-tranparent  border-gray-800/20 bg-darkBrown/10 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(208,141,88,0.2)] transition-all duration-500">
              <CardContent className="p-0 ">
                <div className="relative group">
                  {/* Image with overlay */}
                  <div className="overflow-hidden">
                    <Image
                      src={lawyer.image || "/placeholder.svg"}
                      alt={`${lawyer.name}`}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90"
                      width={500}
                      height={400}
                      priority
                    />
                  </div>

                  {/* Gradient overlay that's always visible but intensifies on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darkBrown/90 via-darkBrown/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Lawyer info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#d08d58] rounded-full p-2 shadow-lg">
                        <UserRound className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-xl text-white group-hover:text-[#d08d58] transition-colors duration-300">
                          {lawyer.name}
                        </h3>
                        <p className="text-gray-200 text-sm flex items-center gap-1">
                          <Award className="h-4 w-4 text-[#d08d58]" />
                          {lawyer.experience}
                        </p>
                        <p className="text-gray-300 text-xs">{lawyer.oab}</p>
                      </div>
                    </div>

                    {/* Call to action - only visible on hover */}
                    <div className="mt-4 overflow-hidden h-0 group-hover:h-10 transition-all duration-500 ease-in-out">
                      <Button variant="link" className="text-[#d08d58] hover:text-white p-0 h-auto font-medium" asChild>
                        <a
                          href={`/about#${lawyer.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex items-center gap-1"
                        >
                          Conheça mais sobre o advogado
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ImgsHero

