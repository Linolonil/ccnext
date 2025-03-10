"use client"

import type React from "react"

import { motion } from "framer-motion"

type AnimatedBlogContentProps = {
  children: React.ReactNode
}

export default function AnimatedBlogContent({ children }: AnimatedBlogContentProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}

