import type React from "react"
import type { Metadata } from "next"
import Banner from "@/components/Banner"

export const metadata: Metadata = {
  title: {
    template: "%s | My Blog",
    default: "Blog | My Website",
  },
  description: "Read our latest articles and stay updated with the newest trends.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="min-h-screen bg-background"><Banner banner="Blog" bg={"/assets/bg-4.png"}/>
{children}</main>
}

