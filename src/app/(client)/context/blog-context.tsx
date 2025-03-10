"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Defina a estrutura do estado do blog (ajuste conforme necessário)
interface BlogContextType {
  posts: Array<{ id: number; title: string; content: string }>;
  setPosts: React.Dispatch<React.SetStateAction<Array<{ id: number; title: string; content: string }>>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Criação do contexto com um valor inicial vazio ou nulo
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Componente Provider para envolver os componentes que precisam acessar o contexto
export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Array<{ id: number; title: string; content: string }>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <BlogContext.Provider value={{ posts, setPosts, loading, setLoading }}>
      {children}
    </BlogContext.Provider>
  );
};

// Hook customizado para acessar o contexto
export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
