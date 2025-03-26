import Link from "next/link"
import Image from "next/image"
import {  Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { PostTypes } from "@/types"

export function BlogPostCard({ post }: { post: PostTypes }) {
  function formatDate(dateString: string | Date) {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className="group flex flex-col md:flex-row gap-4 p-4 border border-muted/30 rounded-lg hover:border-primary/20 transition-colors bg-white">
      <div className="relative aspect-square w-full md:w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={post?.coverImage?.url || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform"
        />
      </div>
      
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <Badge  className="text-xs px-2 py-0.5">
            {post.category}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {formatDate(post.createdAt)}
          </span>
        </div>
        
        <Link href={`/blogs/posts/${post.slug}`} className="hover:no-underline mb-2">
          <h3 className="font-semibold line-clamp-2 group-hover:text-primary">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3 w-3" />
            {post.reading_time || '5 min'}
          </span>
          <Link href={`/blogs/posts/${post.slug}`} className="italic text-primary h-auto p-0">
            Ler mais →
          </Link>
        </div>
      </div>
    </div>
  )
}