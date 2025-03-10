"use client"

import { useEffect } from "react"
import { incrementViewCount } from "@/actions/blog"

type ViewCounterProps = {
  slug: string
}

export default function ViewCounter({ slug }: ViewCounterProps) {
  useEffect(() => {
    // Only increment view once per session
    const hasViewed = sessionStorage.getItem(`viewed-${slug}`)

    if (!hasViewed) {
      // Record the view using server action
      incrementViewCount(slug).catch((error) => {
        console.error("Error recording view:", error)
      })

      // Mark as viewed in this session
      sessionStorage.setItem(`viewed-${slug}`, "true")
    }
  }, [slug])

  // This is a hidden component, no UI
  return null
}

