"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Eye } from "lucide-react"
import { useParams } from "next/navigation"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CommentSection } from "@/components/comment-section"
import { SocialShare } from "@/components/social-share"
import { Sidebar } from "@/components/sidebar"
import { RelatedPosts } from "@/components/related-posts"
import { useBlog } from "@/context/blog-context"

export default function PostPage() {
  const params = useParams({slug})
  const { getPostBySlug } = useBlog()

  const post = getPostBySlug(params.slug)

  // If post not found, we could redirect or show an error
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
          <h1 className="mb-2 text-2xl font-bold">Post Not Found</h1>
          <p className="text-muted-foreground">The post you're looking for doesn't exist or has been removed.</p>
          <Link href="/" className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
        </div>
      </div>
    )
  }

  // This would normally come from a CMS or API
  const postContent = `
    <p>The landscape of corporate law is constantly evolving, with new regulations and amendments being introduced regularly. Recent changes to corporate governance standards have significant implications for businesses of all sizes.</p>
    
    <h2>Key Changes in Corporate Governance</h2>
    
    <p>The new amendments focus primarily on enhancing transparency and accountability in corporate structures. Boards of directors now face increased reporting requirements, particularly regarding environmental, social, and governance (ESG) factors.</p>
    
    <p>Companies must now disclose more detailed information about their governance practices, including:</p>
    
    <ul>
      <li>Board diversity statistics and initiatives</li>
      <li>Executive compensation structures and rationales</li>
      <li>Environmental impact assessments and mitigation strategies</li>
      <li>Social responsibility programs and outcomes</li>
    </ul>
    
    <h2>Implications for Businesses</h2>
    
    <p>These changes represent a significant shift in how corporations must approach governance and reporting. Smaller businesses may find compliance particularly challenging due to limited resources, while larger corporations will need to revamp existing systems to accommodate the new requirements.</p>
    
    <p>Legal departments should begin preparing for these changes by:</p>
    
    <ol>
      <li>Conducting a thorough review of current governance structures</li>
      <li>Identifying gaps in reporting capabilities</li>
      <li>Developing comprehensive compliance strategies</li>
      <li>Training board members and executives on new requirements</li>
    </ol>
    
    <h2>Looking Ahead</h2>
    
    <p>As these regulations continue to evolve, businesses should maintain flexibility in their compliance approaches. Establishing robust governance frameworks now will position companies well for future regulatory changes.</p>
    
    <p>Legal professionals should stay informed about ongoing developments in this area, as further amendments are likely in the coming years.</p>
  `

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Link href="/" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>

          <article className="prose prose-slate max-w-none dark:prose-invert">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{post.title}</h1>
            <p className="text-lg text-muted-foreground">{post.description}</p>

            {post.author && (
              <div className="my-6 flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={post.authorPic || "/placeholder.svg?height=40&width=40"} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{post.author}</div>
                  {/* <div className="text-sm text-muted-foreground">{post.author.title}</div> */}
                </div>
              </div>
            )}

            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {new Date(post.published_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="mr-1 h-4 w-4" />
                {post.views} views
              </div>
            </div>

            <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src={post.image[0]?.imgUrl || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </article>

          <Separator className="my-8" />

          <SocialShare title={post.title} />

          <Separator className="my-8" />

          <CommentSection />

          <Separator className="my-8" />

          <RelatedPosts postId={post.id} />
        </div>

        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

