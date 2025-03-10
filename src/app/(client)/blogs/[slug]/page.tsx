import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { Calendar, Clock, Eye, User } from "lucide-react"

import { getBlogPost, incrementViewCount } from "@/actions/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import AnimatedBlogContent from "../components/animatedBlogContent"

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  // Safely extract content for description
  const description = post.content
    ? post.content.replace(/<[^>]*>/g, "").substring(0, 160)
    : "Read our latest blog post"

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      authors: [post.author],
      publishedTime: post.published_date.toString(),
      images: post.image && post.image.length > 0 && post.image[0]?.imgUrl ? [post.image[0].imgUrl] : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  // Increment view count on server
  await incrementViewCount(params.slug)

  // Safely extract the first image or use a placeholder
  const imageUrl =
    post.image && post.image.length > 0 && post.image[0]?.imgUrl
      ? post.image[0].imgUrl
      : "/placeholder.svg?height=800&width=1200"

  // Safely format the date
  const formattedDate = post.published_date ? format(new Date(post.published_date), "MMMM d, yyyy") : "Unknown date"

  return (
    <div className="container mx-auto py-8 px-4">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/blog">← Back to Blog</Link>
      </Button>

      <AnimatedBlogContent>
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <Badge variant="outline" className="mb-4">
              {post.category}
            </Badge>

            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.reading_time}</span>
              </div>

              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{post.views} views</span>
              </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="mt-12 pt-6 border-t">
            <div className="flex flex-wrap gap-2">
              <span className="font-medium">Tags:</span>
              {post.tags.map((tag: string) => (
                <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                  <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </footer>
        </article>
      </AnimatedBlogContent>
    </div>
  )
}

