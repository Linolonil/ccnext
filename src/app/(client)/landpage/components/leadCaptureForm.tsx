"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface LeadCaptureFormProps {
  onClose: () => void
}

export function LeadCaptureForm({ onClose }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Close the dialog
    setIsSubmitting(false)
    setIsOpen(false)
    onClose()

    // You would typically send the data to your backend here
    console.log("Form submitted:", formData)
  }

  const handleDialogClose = () => {
    setIsOpen(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogClose}>
      <DialogContent className="sm:max-w-[425px] bg-white text-darkBrown">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-darkBrown">Fale com um advogado</DialogTitle>
          <DialogDescription className="text-gray-600">
            Preencha o formulário abaixo e entraremos em contato o mais breve possível.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-darkBrown">
              Nome
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-gray-300 focus:border-[#d08d58] focus:ring-[#d08d58]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-darkBrown">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu.email@exemplo.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-gray-300 focus:border-[#d08d58] focus:ring-[#d08d58]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-darkBrown">
              Telefone
            </Label>
            <Input
              id="phone"
              name="phone"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border-gray-300 focus:border-[#d08d58] focus:ring-[#d08d58]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-darkBrown">
              Mensagem
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Descreva brevemente seu caso"
              value={formData.message}
              onChange={handleChange}
              className="border-gray-300 focus:border-[#d08d58] focus:ring-[#d08d58] min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#d08d58] hover:bg-[#b87a4a] text-white font-medium py-2"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

