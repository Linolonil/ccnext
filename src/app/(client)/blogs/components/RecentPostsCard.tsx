// app/components/recent-posts-card.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { BadgePlus, Calendar, Eye } from "lucide-react"
import { PostTypes } from "@/types"

interface RecentPostsCardProps {
  recentPosts: PostTypes[]
}

export function RecentPostsCard({ recentPosts }: RecentPostsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><BadgePlus className="size-5" />Posts Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post._id} className="flex gap-4">
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                  src={post.coverImage?.url || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="flex flex-col">
                <Link 
                  href={`/blogs/posts/${post.slug}`}
                  className="font-medium hover:text-primary hover:underline line-clamp-2"
                >
                  {post.title}
                </Link>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.createdAt).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                  })}
                  <Eye className="h-3 w-3 ml-2" />
                  {post.views || 0}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}