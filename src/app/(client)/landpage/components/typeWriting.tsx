"use client"

import { useEffect, useState } from "react"

const TypingAnimation = () => {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  
  useEffect(() => {
    const phrases = ["Inovação", "Compromisso", "Excelência"];
    const handleTyping = () => {
      const i = loopNum % phrases.length
      const fullText = phrases[i]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  return (
    <div className="h-[30px] md:h-[50px] mb-2 md:mt-0 mt-10">
      <span className="text-white font-bold">{text}</span>
      <span className="animate-pulse text-[#d08d58]">|</span>
    </div>
  )
}

export default TypingAnimation

