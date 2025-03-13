"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  Copy,
  Phone,
  Instagram,
} from "lucide-react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useBlog } from "@/app/context/blog-context";

export default function PostPage() {
  const params = useParams<{ slug: string }>();
  const { getPostBySlug } = useBlog();
  const post = getPostBySlug(params.slug);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleShare = (platform: string, url: string) => {
    let shareUrl = "";

    switch (platform) {
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;
        break;
      case "instagram":
        navigator.clipboard.writeText(url);
        return;
      case "copy":
        navigator.clipboard.writeText(url);
        return;
    }

    if (platform === "whatsapp") {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  // If post not found
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="mb-6"
          >
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
          </motion.div>
          <h1 className="mb-4 text-3xl font-bold">Post Not Found</h1>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            The post youre looking for doesnt exist or has been removed.
            Please check the URL or try browsing our other articles.
          </p>
          <Button asChild>
            <Link href="/blogs" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <motion.div
        initial="hidden"
        animate={"visible"}
        variants={stagger}
        className="mb-8"
      >
        <motion.div variants={fadeIn}>
          <Link
            href="/blogs"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para todos os posts
          </Link>
        </motion.div>
      </motion.div>

      <div className="w-full">
        <motion.div
          className="lg:col-span-3"
          initial="hidden"
          animate={"visible"}
          variants={stagger}
        >
          <article className="prose prose-slate max-w-none dark:prose-invert">
            <motion.div variants={fadeIn} className="mb-8">
              <Badge className="mb-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                {post.category}
              </Badge>
              <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {post.content.substring(0, 150).replace(/<[^>]*>/g, "")}...
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="relative mb-8 aspect-video overflow-hidden rounded-xl"
            >
              <Image
                src={post.image[0]?.imgUrl || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-wrap items-center justify-between gap-4 mb-8"
            >
              {post.author && (
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={
                        post.authorPic || "/placeholder.svg?height=40&width=40"
                      }
                      alt={post.author}
                    />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{post.author}</div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center bg-muted/50 px-3 py-1.5 rounded-full">
                  <Calendar className="mr-1.5 h-4 w-4 text-primary/80" />
                  {new Date(post.published_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center bg-muted/50 px-3 py-1.5 rounded-full">
                  <Clock className="mr-1.5 h-4 w-4 text-primary/80" />
                  {post.reading_time}
                </div>
                <div className="flex items-center bg-muted/50 px-3 py-1.5 rounded-full">
                  <Eye className="mr-1.5 h-4 w-4 text-primary/80" />
                  {post.views} views
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="content mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <motion.div variants={fadeIn} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <Badge key={tag} variant="outline" className="px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-12">
              <Separator className="my-8" />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Compartilhe esse Artigo
                  </h3>
                  <div className="flex gap-2">
                    {/* Botão do WhatsApp */}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full"
                            onClick={() =>
                              handleShare("whatsapp", window.location.href)
                            }
                          >
                            <Phone className="h-4 w-4" />
                            <span className="sr-only">Share on WhatsApp</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          Compartilhar no WhatsApp
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    {/* Botão do Instagram (Copia o link) */}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full"
                            onClick={() =>
                              handleShare("instagram", window.location.href)
                            }
                          >
                            <Instagram className="h-4 w-4" />
                            <span className="sr-only">
                              Copy link for Instagram
                            </span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          Copiar link para Instagram
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    {/* Botão de Copiar Link */}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full"
                            onClick={() =>
                              handleShare("copy", window.location.href)
                            }
                          >
                            <Copy className="h-4 w-4" />
                            <span className="sr-only">Copy link</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Copiar link</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </motion.div>
          </article>
        </motion.div>
      </div>
    </div>
  );
}
