"use client"

import Link from "next/link";
import Image from "next/image";
import { Badge, Calendar, Clock, Eye } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useBlog } from "../../context/blog-context";

export function BlogPostList() {
  const { posts } = useBlog();

  return (
    <div className="space-y-8">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr]">
              <div className="relative aspect-video md:aspect-square">
                <Image
                  src={post?.image[0]?.imgUrl || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="mb-2">
                    <Badge>{post?.category}</Badge>
                  </div>
                  <Link href={`/posts/${post?.slug}`} className="group">
                    <h2 className="line-clamp-2 text-2xl font-bold group-hover:text-primary group-hover:underline">
                      {post?.title}
                    </h2>
                  </Link>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="line-clamp-3 text-muted-foreground">{post?.description}</p>
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
                      {post?.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="mr-1 h-4 w-4" />
                      {post?.views} views
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href={`/posts/${post?.slug}`} className="text-primary hover:underline">
                    Read More
                  </Link>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
          <h3 className="mb-2 text-lg font-medium">No posts found</h3>
          <p className="text-muted-foreground">Try adjusting your filters or search criteria.</p>
        </div>
      )}
    </div>
  );
}
