"use client";

import { useState } from "react";
import { LawyerCard } from "./LawyersCard";
import { LawyerModal } from "./ModalLawyer";
import { AnimatePresence, motion } from "framer-motion";
import { Lawyer } from "@/app/types/LawyersTypes";
import { lawyers } from "../../(constants)/lawyersTexts";
import SectionDivider from "../../landpage/components/SectionDivider";

export default function LawyersAbout() {
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);

  const openModal = (lawyer: Lawyer) => setSelectedLawyer(lawyer);
  const closeModal = () => setSelectedLawyer(null);

  return (
    <section
      id="advogados"
      className="py-16 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 md:gap-8 justify-items-center"
        >
          {lawyers.map((lawyer) => (
            <LawyerCard key={lawyer.id} lawyer={lawyer} openModal={openModal} />
          ))}
        </motion.div>
      </div>

      {/* Modal usando AnimatePresence */}
      <AnimatePresence>
        {selectedLawyer && (
          <LawyerModal lawyer={selectedLawyer} closeModal={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}