"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, useTransition } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"

export default function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "")
  const [isPending, startTransition] = useTransition()

  // Debounce search to avoid too many requests
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        startTransition(() => {
          const params = new URLSearchParams(searchParams.toString())
          params.set("search", searchQuery)
          params.set("page", "1") // Reset to first page on new search
          router.push(`/blog?${params.toString()}`)
        })
      } else if (searchParams.has("search")) {
        startTransition(() => {
          const params = new URLSearchParams(searchParams.toString())
          params.delete("search")
          router.push(`/blog?${params.toString()}`)
        })
      }
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchQuery, router, searchParams])

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search articles..."
        className="pl-10 w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search articles"
      />
      {isPending && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      )}
    </div>
  )
}

