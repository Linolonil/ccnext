// app/posts/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Eye} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getPostById } from "@/app/actions/posts";
import { MarkdownViewerr } from "../../components/markdown";
import { ShareButtons } from "../../components/ShareButtons";
import { FaUser } from "react-icons/fa";
import { incrementViews } from "@/app/actions/view-counter";



export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug }  = await params

  const [post] = await Promise.all([
    getPostById(slug),
    incrementViews(slug) 
  ]);

  if (!post) {
    return (
      <div className="container mx-auto ">
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-muted-foreground/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="mb-4 text-3xl font-bold">Post Não Encontrado</h1>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            O post que você está procurando não existe ou foi removido.
          </p>
          <Button asChild>
            <Link href="/blogs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para todos os posts
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="mb-8">
        <Link
          href="/blogs"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para todos os posts
        </Link>
      </div>

      <div className="w-full">
        <div className="lg:col-span-3">
          <article>
            <div className="mb-8">
              <Badge className="mb-4 bg-primary hover:bg-primary/90 text-muted">
                {post.category}
              </Badge>
              <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="text-lg prose">
                {post.excerpt}
              </p>
            </div>

            <div className="relative mb-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src={post.coverImage?.url || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              {post.author && (
                <div className="flex items-center gap-2">
                    <FaUser/>
                  <div>
                    <div className="font-medium">Dr. {post.author}</div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4 text-sm text-primary-80">
                <div className="flex items-center bg-gray-200 px-3 py-1.5 rounded-full">
                  <Calendar className="mr-1.5 h-4 w-4 text-primary/90" />
                  {new Date(post.createdAt).toLocaleDateString("pt-BR")}
                </div>
                <div className="flex items-center bg-gray-200 px-3 py-1.5 rounded-full">
                  <Clock className="mr-1.5 h-4 w-4 text-primary/90" />
                  {post.reading_time}
                </div>
                <div className="flex items-center bg-gray-200 px-3 py-1.5 rounded-full">
                  <Eye className="mr-1.5 h-4 w-4 text-primary/90" />
                  {post.views} visualizações
                </div>
              </div>
            </div>

            <MarkdownViewerr content={post.content} />

            {post.tags?.length > 0 && (
              <div className="mb-8 mt-10">
                <h3 className="text-xl font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag}  className="px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12">
              <Separator className="my-8" />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Compartilhe esse Artigo
                  </h3>
                 <ShareButtons/>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="mt-8">
          <Link
            href="/blogs"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para todos os posts
          </Link>
      </div>
    </div>
  );
}