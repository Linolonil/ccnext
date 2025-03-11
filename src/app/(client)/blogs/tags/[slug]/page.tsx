"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { BlogPostList } from "@/components/blog-post-list"
import { Sidebar } from "@/components/sidebar"
import { useBlog } from "@/context/blog-context"

export default function TagPage() {
  const params = useParams({slug})
  const { tags, toggleTag, selectedTags, clearFilters } = useBlog()

  // Convert slug to tag name
  const tagName = tags.find((tag) => tag.name.toLowerCase().replace(/\s+/g, "-") === params.slug)?.name

  // Set the tag filter when the page loads
  useEffect(() => {
    clearFilters()
    if (tagName && !selectedTags.includes(tagName)) {
      toggleTag(tagName)
    }
  }, [tagName, clearFilters, toggleTag, selectedTags])

  if (!tagName) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
          <h1 className="mb-2 text-2xl font-bold">Tag Not Found</h1>
          <p className="text-muted-foreground">The tag you're looking for doesn't exist or has been removed.</p>
          <Link href="/" className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Link href="/" className="mb-4 inline-flex items-center text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>

          <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Tag: {tagName}</h1>

          <BlogPostList />
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

