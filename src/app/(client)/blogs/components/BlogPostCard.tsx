"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, Eye } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Post } from "@/app/context/blog-context"

export function BlogPostCard({ post }: { post: Post }) {
  return (
    <Card className="overflow-hidden border-none bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 shadow-md hover:shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr]">
        <div className="relative aspect-video md:w-full md:h-full">
          <Image
            src={post?.image[0]?.imgUrl || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col md:pt-0 pt-4">
          <CardHeader className="pb-2">
            <div className="mb-2">
              <Badge>{post.category}</Badge>
            </div>
            <Link href={`/blogs/posts/${post?.slug}`} className="group">
              <h2 className="line-clamp-2 text-2xl font-bold group-hover:text-primary group-hover:underline">
                {post?.title}
              </h2>
            </Link>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="line-clamp-3 text-muted-foreground">{post?.content}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {new Date(post?.published_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {post?.reading_time}
              </div>
              <div className="flex items-center">
                <Eye className="mr-1 h-4 w-4" />
                {post?.views} views
              </div>
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button asChild variant="ghost" className="group px-0 text-primary font-medium hover:bg-transparent w-fit">
              <Link href={`/blogs/posts/${post?.slug}`} className="flex items-center">
                Ler artigo completo
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </motion.div>
              </Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
