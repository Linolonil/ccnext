"use client";
import React from "react";
import { useBlog } from "../../../context/blog-context";
import { SearchCard } from "./SearchCard";
import { CategoriesCard } from "./CategoriesCard";
import { RecentPostsCard } from "./RecentPostsCard";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const { toggleCategory, posts, categories, selectedCategories } = useBlog();
  const pathname = usePathname();
  const isBlog = pathname.startsWith("/blogs/posts");

  // Sort posts by publication date and get the 3 most recent
  const recentPosts = [...posts]
    .sort(
      (a, b) =>
        new Date(b.published_date).getTime() - new Date(a.published_date).getTime()
    )
    .slice(0, 3);



  return (
    <div className="space-y-8">
      {!isBlog && (
        <>
          <SearchCard/>
          <CategoriesCard
            categories={categories}
            toggleCategory={toggleCategory}
            selectedCategories={selectedCategories}
          />
        </>
      )}
      <RecentPostsCard recentPosts={recentPosts} />
    </div>
  );
}