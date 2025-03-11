"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useBlog } from "@/context/blog-context"

interface RelatedPostsProps {
  postId?: number
}

export function RelatedPosts({ postId }: RelatedPostsProps) {
  const { posts, getRelatedPosts } = useBlog()

  // If postId is provided, get related posts based on that post
  // Otherwise, just show random posts
  const relatedPosts = postId
    ? getRelatedPosts(posts.find((p) => p.id === postId)!)
    : posts.sort(() => 0.5 - Math.random()).slice(0, 3)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Related Articles</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {relatedPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <Link href={`/posts/${post.slug}`} className="group">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={post.image[0]?.imgUrl || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="line-clamp-2 font-medium group-hover:text-primary group-hover:underline">
                  {post.title}
                </h3>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

