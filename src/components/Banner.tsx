"use client"

import { motion } from "framer-motion"
import { FaChevronRight } from "react-icons/fa"
import Link from "next/link"

interface BannerProps {
  banner: string
  bg: string
  breadcrumbs?: { label: string; href: string }[]
  subtitle?: string
}

function Banner({ banner, bg, breadcrumbs, subtitle }: BannerProps) {
  return (
    <div
      className="relative bg-cover bg-center h-[40vh] md:h-[45vh] lg:h-[50vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Simple overlay */}
      <div className="absolute inset-0 bg-[#3c2a21]/75"></div>

      <div className="relative z-10 text-center px-6 md:px-10 max-w-4xl">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-2 mb-8 text-gray-300 text-sm"
          >
            <Link href="/" className="text-gray-300 hover:text-[#d08d58] transition-colors">
              Início
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                <FaChevronRight className="mx-2 h-2 w-2 text-gray-400" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-[#d08d58]">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="text-gray-300 hover:text-[#d08d58] transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}

        {/* Main title with minimal animation */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
        >
          {banner}
        </motion.h1>

        {/* Optional subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Minimal accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 mx-auto h-[2px] w-16 bg-[#d08d58]"
        ></motion.div>
      </div>
    </div>
  )
}

export default Banner

