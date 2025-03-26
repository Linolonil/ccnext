"use client";

import { LawyerCard } from "./LawyersCard";
import { lawyers } from "../../(constants)/lawyersTexts";
import SectionDivider from "../../landpage/components/SectionDivider";
import { motion } from "framer-motion";

export default function LawyersAbout() {
  return (
    <section
      id="advogados"
      className="py-16 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="w-full mx-auto">
        {/* Título com animação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=""
        >
          <SectionDivider
            title="Nossa Equipe"
            subtitle="Nossa equipe pronta para lhe atender"
          />
        </motion.div>

        {/* Grid de cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid w-full grid-cols-1 gap-10 justify-items-center md:grid-cols-1 2xl:grid-cols-2"        >
          {lawyers.map((lawyer) => (
            <LawyerCard key={lawyer.id} lawyer={lawyer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}