"use client";
import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";

// Definição da interface do post (baseada no modelo do Mongoose)
export interface Post {
  _id: string; // MongoDB usa _id como chave primária
  title: string;
  slug: string;
  image: { imgUrl: string; public_id: string }[];
  isAvailable: boolean;
  category: string;
  author: string;
  authorPic?: string;
  published_date: Date;
  reading_time: string;
  content: string;
  tags: string[];
  views: number;
  createdAt?: Date; // Adicionado pelo timestamps
  updatedAt?: Date; // Adicionado pelo timestamps
}

// Definição da estrutura do contexto do blog
interface BlogContextType {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  addPost: (post: Post) => void;
  deletePost: (postId: string) => void; // Usando _id como string
  filteredPosts: Post[]; // Posts filtrados por busca e categorias
  categories: string[]; // Lista de todas as categorias disponíveis
  addCategory: (category: string) => void; // Função para adicionar uma nova categoria
}

// Criação do contexto com um valor inicial indefinido
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Componente Provider para envolver os componentes que precisam acessar o contexto
export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>(["Technology", "Lifestyle", "Travel"]); // Categorias iniciais

  // Função para adicionar um novo post
  const addPost = (post: Post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  // Função para deletar um post
  const deletePost = (postId: string) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
  };

  // Função para alternar a seleção de uma categoria
  const toggleCategory = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category) // Remove a categoria se já estiver selecionada
        : [...prevCategories, category] // Adiciona a categoria se não estiver selecionada
    );
  };

  // Função para adicionar uma nova categoria
  const addCategory = (category: string) => {
    if (!categories.includes(category)) {
      setCategories((prevCategories) => [...prevCategories, category]);
    }
  };

  // Filtra os posts com base na busca e nas categorias selecionadas
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(post.category);
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategories]);

  // Valor do contexto
  const contextValue: BlogContextType = {
    posts,
    setPosts,
    loading,
    setLoading,
    searchQuery,
    setSearchQuery,
    selectedCategories,
    toggleCategory,
    addPost,
    deletePost,
    filteredPosts,
    categories,
    addCategory,
  };

  return (
    <BlogContext.Provider value={contextValue}>
      {children}
    </BlogContext.Provider>
  );
};

// Hook customizado para acessar o contexto
export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};