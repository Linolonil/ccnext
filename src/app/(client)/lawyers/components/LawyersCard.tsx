import { Lawyer } from "@/types/LawyersTypes";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface LawyerCardProps {
  lawyer: Lawyer;
}

export function LawyerCard({ lawyer }: LawyerCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl">
      {/* Layout flexível para desktop */}
      <div className="flex flex-col md:flex-row">
        {/* Foto do advogado (metade do card no desktop) */}
        <div className="md:w-1/2 relative h-[400px] md:h-auto">
        <Image
          src={lawyer.image || "/placeholder.svg"}
          alt={lawyer.name}
          fill
          className="object-cover object-top"
        />

          <div className="absolute inset-0 bg-gradient-to-t from-[#3c2a21]/90 to-transparent md:hidden"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
            <h3 className="text-2xl font-bold text-white">{lawyer.name}</h3>
            <p className="text-[#d08d58]">{lawyer.specialty}</p>
          </div>
        </div>

        {/* Informações do advogado (metade do card no desktop) */}
        <div className="md:w-1/2 p-6">
          <div className="mb-6">
            <p className="text-[#d08d58] text-sm font-medium uppercase tracking-wider">Nosso Especialista</p>
            <h3 className="text-3xl font-bold text-[#3c2a21] mt-1">{lawyer.name}</h3>
            <p className="text-gray-600 mt-1">
              {lawyer.specialty} • {lawyer.oab}
            </p>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-semibold text-[#3c2a21] mb-2">Sobre</h4>
            <p className="text-gray-700 leading-relaxed mb-6 text-justify">{lawyer.description}</p>

            <h4 className="text-lg font-semibold text-[#3c2a21] mb-2">Contato</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[#d08d58]/10 text-[#d08d58]">
                  <FaPhone size={16} />
                </div>
                <div>
                  <p className="text-gray-700">{lawyer.phone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[#d08d58]/10 text-[#d08d58]">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <p className="text-gray-700">{lawyer.email}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-[#d08d58] hover:bg-[#b87a4a] text-white">
                <a
                  href={lawyer.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp />
                  <span>Conversar no WhatsApp</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-[#3c2a21] text-[#3c2a21] hover:bg-[#3c2a21] hover:text-white"
              >
                <a href={`mailto:${lawyer.email}`} className="flex items-center gap-2">
                  <FaEnvelope />
                  <span>Enviar e-mail</span>
                </a>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Siga nas redes sociais</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 bg-[#3c2a21] rounded-full text-white hover:bg-[#d08d58] transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-[#3c2a21] rounded-full text-white hover:bg-[#d08d58] transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-[#3c2a21] rounded-full text-white hover:bg-[#d08d58] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}