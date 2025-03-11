/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useState, FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge, Calendar, Eye, Search, Tag } from "lucide-react"
import { Post, useBlog } from "../../context/blog-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { toast } from "react-toastify"

interface Category {
  name: string
  count: number
}

export function Sidebar() {
  const { setSearchQuery, toggleCategory, posts, categories } = useBlog()
  const [searchInput, setSearchInput] = useState<string>("")

  // Ordena os posts pela data de publicação e pega os 3 mais recentes
  const recentPosts: Post[] = [...posts]
    .sort((a, b) => new Date(b.published_date).getTime() - new Date(a.published_date).getTime())
    .slice(0, 3)

  // Função para lidar com a busca
  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    setSearchQuery(searchInput) // Atualiza o contexto com o termo de busca
    setSearchInput("") // Limpa o campo de busca
  }

  return (
    <div className="space-y-8">
      {/* Card de Busca */}
      <Card>
        <CardHeader>
          <CardTitle>Search</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-8"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Button type="submit" className="sr-only">
              Search
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Card de Categorias */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category: Category) => (
              <li key={category.name} className="flex justify-between">
                <button
                  onClick={() => toggleCategory(category.name)} // Usa a função do contexto
                  className="text-left text-muted-foreground hover:text-primary hover:underline"
                >
                  {category.name}
                </button>
                <span className="text-sm text-muted-foreground">({category.count})</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Card de Posts Recentes */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post: Post) => (
              <div key={post.id}>
                <div className="flex gap-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={post.image[0]?.imgUrl || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Link href={`/posts/${post.slug}`} className="font-medium hover:text-primary hover:underline">
                      {post.title}
                    </Link>
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.published_date).toLocaleDateString("en-US", {
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
    </div>
  )
}