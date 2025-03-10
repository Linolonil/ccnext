import { AreasInfoBreaker } from "@/app/types/AreasInfoBreakerTypes";
import { FaBriefcase, FaGavel, FaUsers } from "react-icons/fa";

export const areasInfoBreaker: AreasInfoBreaker[] = [
    {
      id: 1,
      title: "Direito Bancário",
      description:
        ["Revisão de contratos bancários", "Tarifas bancárias", "Revisão de juros abusivos"], 
      icon: <FaBriefcase size={50} className="text-gray-300" />,
      message: "Olá, gostaria de informações sobre Direito Trabalhista. Pode me ajudar?",
    },
    {
      id: 2,
      title: "Direito do consumidor",
      description:
        ["Overbooking", "Venda casada", "Vício no produto", "Práticas abusivas"], 
      icon: <FaGavel size={50} className="text-gray-300" />,
      message: "Olá, gostaria de informações sobre Direito Civil. Pode me ajudar?",
    },
    {
      id: 3,
      title: "Direito de Família",
      description:
       [ "Sucessões, divórcio", "Pensão alimentícia", "Dissolução de união estável"], 
      icon: <FaUsers size={50} className="text-gray-300" />,
      message: "Olá, gostaria de informações sobre Direito de Família. Pode me ajudar?",
    },
  ]