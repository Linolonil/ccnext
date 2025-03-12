"use client"
import React, { useState, FormEvent } from "react"
import { useBlog } from "../../context/blog-context"
import { SearchCard } from "./SearchCard"
import { CategoriesCard } from "./CategoriesCard"
import { RecentPostsCard } from "./RecentPostsCard"

export function Sidebar() {
  const { setSearchQuery, toggleCategory, posts, categories } = useBlog()
  const [searchInput, setSearchInput] = useState<string>("")

  // Ordena os posts pela data de publicação e pega os 3 mais recentes
  const recentPosts = [...posts]
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
      <SearchCard searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch} />
      <CategoriesCard categories={categories} toggleCategory={toggleCategory} />
      <RecentPostsCard recentPosts={recentPosts} />
    </div>
  )
}
