"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "react-toastify"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send, Instagram, Linkedin, Facebook } from "lucide-react"
import SectionDivider from "./SectionDivider"

export default function ContactsComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso!")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        toast.error("Erro ao enviar a mensagem. Tente novamente.")
      }
    } catch (error) {
        console.log(error)
      toast.error("Erro ao conectar com o servidor.")
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contatos" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionDivider
            title="Entre em Contato"
            subtitle="Estamos prontos para atender suas necessidades jurídicas"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#d08d58]"></div>

              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-[#3c2a21]">Envie uma mensagem</CardTitle>
                <p className="text-gray-600">
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#3c2a21]">
                      Nome completo
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="border-gray-300 focus-visible:ring-[#d08d58]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#3c2a21]">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu.email@exemplo.com"
                        className="border-gray-300 focus-visible:ring-[#d08d58]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#3c2a21]">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className="border-gray-300 focus-visible:ring-[#d08d58]"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#3c2a21]">
                      Mensagem
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva como podemos ajudar você"
                      className="min-h-[120px] border-gray-300 focus-visible:ring-[#d08d58]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#d08d58] hover:bg-[#b87a4a] text-white font-medium py-6"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Enviar mensagem
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info Card */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-[#3c2a21]">Informações de Contato</CardTitle>
                <p className="text-gray-600">
                  Entre em contato conosco por telefone, e-mail ou visite nosso escritório.
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-6">
                  <motion.li
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-3 rounded-full bg-[#d08d58]/10 text-[#d08d58]">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#3c2a21]">Telefone</h4>
                      <p className="text-gray-600">(00) 0000-0000</p>
                      <p className="text-gray-600">(00) 00000-0000 (WhatsApp)</p>
                    </div>
                  </motion.li>

                  <motion.li
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-3 rounded-full bg-[#d08d58]/10 text-[#d08d58]">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#3c2a21]">E-mail</h4>
                      <p className="text-gray-600">contato@carvalhocastro.adv.br</p>
                      <p className="text-gray-600">atendimento@carvalhocastro.adv.br</p>
                    </div>
                  </motion.li>

                  <motion.li
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-3 rounded-full bg-[#d08d58]/10 text-[#d08d58]">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#3c2a21]">Endereço</h4>
                      <p className="text-gray-600">Av. Exemplo, 1234 - Sala 567</p>
                      <p className="text-gray-600">Bairro, Cidade - UF, 00000-000</p>
                    </div>
                  </motion.li>

                  <motion.li
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-3 rounded-full bg-[#d08d58]/10 text-[#d08d58]">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#3c2a21]">Horário de Atendimento</h4>
                      <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                      <p className="text-gray-600">Sábados: Mediante agendamento</p>
                    </div>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>

            {/* Map Card */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356219550619!2d-43.18058532549841!3d-22.90692823858638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f58a6a00a9d%3A0x3f251d85272f76f7!2sCentro%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1710702456018!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do escritório"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Card */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-[#3c2a21] mb-4">Siga-nos nas redes sociais</h4>
                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#d08d58]/10 text-[#d08d58] hover:bg-[#d08d58] hover:text-white transition-colors duration-300"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#d08d58]/10 text-[#d08d58] hover:bg-[#d08d58] hover:text-white transition-colors duration-300"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#d08d58]/10 text-[#d08d58] hover:bg-[#d08d58] hover:text-white transition-colors duration-300"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

