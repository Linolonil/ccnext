"use client";
import { PostTypes } from "@/types";
import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect } from "react";
import { fetchPosts } from "../actions/posts";

export interface Category {
  name: string;
  count: number;
}

interface BlogContextType {
  posts: PostTypes[];
  setPosts: React.Dispatch<React.SetStateAction<PostTypes[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  handleSearchQuery: (query: string) => void;
  getPostBySlug: (slug: string) => PostTypes | undefined;
  filteredPosts: PostTypes[];
  categories: Category[];
  refreshPosts: () => Promise<void>; // Adicionado
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogProviderProps {
  children: ReactNode;
  initialPosts?: PostTypes[]; // Adicionado para SSR
}

export const BlogProvider: React.FC<BlogProviderProps> = ({ 
  children, 
  initialPosts = [] 
}) => {
  const [posts, setPosts] = useState<PostTypes[]>(initialPosts);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  const refreshPosts = async () => {
    setLoading(true);
    try {
      const data = await fetchPosts();
      setPosts(data);
    } catch (error) {
      console.error('Failed to refresh posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (posts.length === 0) {
      refreshPosts();
    }
  }, [posts.length]); 

  const categories = useMemo(() => {
    const categoryCount = posts.reduce((acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  
    return Object.keys(categoryCount).map((category) => ({
      name: category,
      count: categoryCount[category],
    }));
  }, [posts]);

  const getPostBySlug = (slug: string): PostTypes | undefined => {
    return posts.find((post) => post.slug === slug);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.content && post.content.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (post.tags && post.tags.some((tag) => 
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ));
      
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some(
          (selectedCategory) => selectedCategory.toLowerCase() === post.category.toLowerCase()
        );
      
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategories]);
  
  const contextValue: BlogContextType = {
    posts,
    setPosts,
    loading,
    setLoading,
    searchQuery,
    setSearchQuery: handleSearchQuery,
    selectedCategories,
    toggleCategory,
    handleSearchQuery,
    getPostBySlug,
    filteredPosts,
    categories,
    refreshPosts, // Adicionado ao contexto
  };

  return (
    <BlogContext.Provider value={contextValue}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};