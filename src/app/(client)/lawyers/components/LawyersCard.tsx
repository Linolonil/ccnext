import { Lawyer } from '@/app/types/LawyersTypes';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

interface LawyerCardProps {
  lawyer: Lawyer;
  openModal: (lawyer: Lawyer) => void;
}

export function LawyerCard({ lawyer, openModal }: LawyerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      {/* Seção da imagem */}
      <div className="relative overflow-hidden h-80 bg-[#3c2a21]">
        <div className="relative w-full aspect-[408/612]">
          <Image
            src={lawyer.image || "/placeholder.svg"}
            alt={lawyer.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={lawyer.id === 1}
          />
        </div>

        {/* Overlay de hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3c2a21]/90 via-transparent to-transparent  opacity-100 transition-opacity duration-300"></div>

        {/* Informações de contato (aparecem no hover) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform  translate-y-0 transition-transform duration-300">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-white text-sm font-medium">{lawyer.oab}</p>
              <p className="text-[#d08d58] text-sm">{lawyer.specialty}</p>
            </div>
            <div className="flex space-x-2">
              <a
                href={`mailto:${lawyer.email}`}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-[#d08d58] transition-colors"
                aria-label="Enviar email"
              >
                <FaEnvelope size={14} />
              </a>
              <a
                href={lawyer.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-[#d08d58] transition-colors"
                aria-label="Abrir WhatsApp"
              >
                <FaWhatsapp size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-[#3c2a21]">
            {lawyer.name.split(" ").slice(0, -3).join(" ")}
          </h3>
        </div>

        {/* Botão de ação */}
        <Button
          onClick={() => openModal(lawyer)}
          variant="outline"
          className="w-full border-[#d08d58] text-[#d08d58] hover:bg-[#d08d58] hover:text-white transition-colors"
        >
          Ver perfil completo
        </Button>
      </div>
    </motion.div>
  );
}