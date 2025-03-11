"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

import { BlogPostList } from "@/components/blog-post-list"
import { Sidebar } from "@/components/sidebar"
import { useBlog } from "@/context/blog-context"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const { setSearchQuery, clearFilters } = useBlog()

  // Set the search query when the page loads
  useEffect(() => {
    clearFilters()
    if (query) {
      setSearchQuery(query)
    }
  }, [query, clearFilters, setSearchQuery])

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Link href="/" className="mb-4 inline-flex items-center text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>

          <div className="mb-8 flex items-center">
            <Search className="mr-2 h-5 w-5" />
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {query ? `Search results for "${query}"` : "Search Results"}
            </h1>
          </div>

          <BlogPostList />
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

