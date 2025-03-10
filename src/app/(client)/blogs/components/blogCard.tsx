"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PostResponse } from "@/app/types/blog"

type BlogCardProps = {
  post: PostResponse
  index: number
}

export default function BlogCard({ post, index }: BlogCardProps) {
  // Safely extract the first image or use a placeholder
  const imageUrl =
    post.image && post.image.length > 0 && post.image[0]?.imgUrl
      ? post.image[0].imgUrl
      : "/placeholder.svg?height=400&width=600"

  // Safely format the date
  const formattedDate = post.published_date
    ? formatDistanceToNow(new Date(post.published_date), { addSuffix: true })
    : "Unknown date"

  // Safely extract and truncate content
  const plainContent = post.content
    ? post.content.replace(/<[^>]*>/g, "").substring(0, 150) + "..."
    : "No content available"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <CardHeader className="p-4 pb-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Badge variant="outline" className="bg-primary/10">
                {post.category}
              </Badge>
            </div>
            <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
          </CardHeader>

          <CardContent className="p-4 pt-0">
            <p className="text-muted-foreground line-clamp-3">{plainContent}</p>
          </CardContent>

          <CardFooter className="p-4 pt-0 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.reading_time}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{post.views}</span>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}

