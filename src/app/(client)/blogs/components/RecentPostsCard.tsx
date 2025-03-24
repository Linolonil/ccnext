import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PostTypes } from "@/types"

interface RecentPostsCardProps {
  recentPosts: PostTypes[]
}

export const RecentPostsCard: React.FC<RecentPostsCardProps> = ({ recentPosts }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Posts Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post._id}>
              <div className="flex gap-4">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={post.coverImage?.url || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <Link href={`/blogs/posts/${post.slug}`} className="font-medium hover:text-primary hover:underline">
                    {post.title}
                  </Link>
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.createdAt).toLocaleDateString("pt-BR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center mt-1">
                    <Eye className="h-3 w-3 mr-1" />
                    {post.views} views
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
