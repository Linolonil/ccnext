"use client";

import { useBlog } from "@/app/context/blog-context";
import { useState } from "react";
import { BlogPostCard } from "./BlogPostCard";
import { Pagination } from "./Pagination";

export function BlogPostList() {
  const { posts, filteredPosts, searchQuery } = useBlog();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Se houver uma busca ativa, usa os resultados filtrados, senão usa todos os posts
  const displayedPosts = searchQuery ? filteredPosts : posts;
  const totalPages = Math.ceil(displayedPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = displayedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  return (
    <div className="space-y-8">
      {displayedPosts.length > 0 ? (
        <>
          {currentPosts.map((post) => (
            <BlogPostCard key={post._id} post={post} />
          ))}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={goToPage}
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
          />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
          <h3 className="mb-2 text-lg font-medium">Nenhum post encontrado</h3>
          {searchQuery ? (
            <p className="text-muted-foreground">Tente ajustar sua busca ou filtros.</p>
          ) : (
            <p className="text-muted-foreground">Nenhum artigo foi publicado ainda.</p>
          )}
        </div>
      )}
    </div>
  );
}
