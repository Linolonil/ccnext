import { cn } from "@/lib/utils"

interface SectionDividerProps {
  title: string
  subtitle?: string
  className?: string
  styless?: string
  align?: "center" | "left"
}

export default function SectionDivider({ title, subtitle, className, styless, align = "center" }: SectionDividerProps) {
  return (
    <div className={cn("mb-12", align === "center" ? "text-center" : "text-left", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#3c2a21] mb-2 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#d08d58] rounded-full"></span>
      </h2>

      {subtitle && <p className={` mt-4 max-w-2xl mx-auto ${styless ? styless : "text-gray-600"}`}>{subtitle}</p>}
    </div>
  )
}

