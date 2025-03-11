import { ServicesTexts } from "@/types/ServiceTextsTypes";
import { FaHandHoldingUsd, FaHome, FaUserShield } from "react-icons/fa";

export const servicesTexts: ServicesTexts[] = [
  {
    icon: FaHandHoldingUsd,
    title: "Problemas com Bancos?",
    subTitle: [
      "Cobranças indevidas",
      "Juros abusivos",
      "Tarifas bancárias excessivas",
    ],
    description: [
      "Seu banco está cobrando taxas inesperadas?",
      "Seu empréstimo ou financiamento tem juros muito altos?",
      "Você está sendo cobrado por serviços que não contratou?",
    ],
    moreInfo: [
      "Se você identificou tarifas bancárias que não reconhece ou está pagando juros abusivos em seu financiamento, é possível revisar e negociar melhores condições. Podemos te ajudar a recuperar valores indevidos!",
      "Muitas instituições cobram taxas que o cliente não autorizou ou sequer conhece. Se você desconfia de cobranças indevidas, podemos verificar e exigir a devolução dos valores!",
      "Além disso, em casos de negativação indevida, podemos atuar para remover restrições e recuperar sua saúde financeira!",
    ],
    phoneNumber: "559294322782",
  },
  {
    icon: FaUserShield,
    title: "Foi lesado como consumidor?",
    subTitle: [
      "Produto com defeito",
      "Cancelamento ou atraso de voo",
      "Cobrança indevida",
      "Venda casada e práticas abusivas",
    ],
    description: [
      "Seu produto veio com defeito?",
      "Seu voo foi cancelado ou atrasado sem aviso prévio?",
      "Recebeu uma cobrança por algo que não contratou?",
      "Foi obrigado a adquirir um serviço ou produto que não desejava?",
    ],
    moreInfo: [
      "Você tem direito à troca ou reembolso caso tenha adquirido um produto com defeito e a loja se recuse a resolver o problema. Vamos ajudar a garantir seus direitos!",
      "Companhias aéreas são obrigadas a indenizar passageiros em casos de cancelamento ou atraso de voo sem aviso prévio. Verifique se você tem direito a uma compensação!",
      "Se recebeu uma cobrança indevida por um serviço ou produto que não contratou, podemos tomar as medidas legais necessárias para garantir seu reembolso e evitar futuros problemas!",
      "Práticas abusivas, como venda casada e publicidade enganosa, são proibidas por lei. Podemos agir legalmente para proteger seus direitos e buscar uma solução justa!",
    ],
    phoneNumber: "559294322782",
  },
  {
    icon: FaHome,
    title: "Precisa resolver questões familiares?",
    subTitle: [
      "Divórcio e separação",
      "Pensão alimentícia",
      "Guarda dos filhos",
      "Regulamentação de visitas",
    ],
    description: [
      "Está se separando e quer garantir seus direitos?",
      "Precisa pedir ou revisar a pensão alimentícia?",
      "Quer definir a guarda dos seus filhos?",
      "Precisa regularizar visitas e convívio familiar?",
    ],
    moreInfo: [
      "Se está passando por um divórcio, podemos garantir que seus direitos sejam preservados, incluindo divisão de bens e pensão, se necessário.",
      "A pensão alimentícia pode ser solicitada ou ajustada conforme a necessidade das crianças e a capacidade financeira dos pais. Veja como proceder!",
      "É importante garantir um ambiente seguro e adequado para as crianças. Podemos te auxiliar na definição de guarda e visitas!",
    ],
    phoneNumber: "559294322782",
  },
];
