"use client";
import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";

// Definição da interface do post (baseada no modelo do Mongoose)
export interface Post {
  _id: string; 
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

export interface Category {
  name: string;
  count: number;
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
  getPostBySlug: (slug: string) => Post | undefined;
  filteredPosts: Post[]; 
  categories: Category[];
}


// dados mockados
export const postsMock: Post[] = [
  {
    _id: "1",
    title: "O Futuro da Inteligência Artificial na Advocacia",
    slug: "futuro-ia-advocacia",
    image: [{ imgUrl: "/assets/bg-4.png", public_id: "ai-law-1" }],
    isAvailable: true,
    category: "Tecnologia Jurídica",
    author: "Dr. Sérgio Cunha",
    authorPic: "https://source.unsplash.com/100x100/?man,lawyer",
    published_date: new Date("2024-06-15"),
    reading_time: "5 min",
    content: "A inteligência artificial está transformando o setor jurídico, tornando processos mais rápidos e eficientes. Neste artigo, exploramos como a IA pode auxiliar advogados na pesquisa de jurisprudência, automação de contratos e análise de casos.",
    tags: ["IA", "Advocacia", "Automação Jurídica"],
    views: 1200,
    createdAt: new Date("2024-06-10"),
    updatedAt: new Date("2024-06-12")
  },
  {
    _id: "2",
    title: "Entenda Seus Direitos Trabalhistas em 2024",
    slug: "direitos-trabalhistas-2024",
    image: [{ imgUrl: "/assets/bg-4.png", public_id: "labor-law-1" }],
    isAvailable: true,
    category: "Direito do Trabalho",
    author: "Dra. Mariana Serrão",
    authorPic: "https://source.unsplash.com/100x100/?woman,lawyer",
    published_date: new Date("2024-07-01"),
    reading_time: "7 min",
    content: "O cenário dos direitos trabalhistas muda constantemente. Neste artigo, abordamos as principais atualizações para 2024, incluindo mudanças na CLT e direitos dos trabalhadores autônomos.",
    tags: ["Trabalho", "Direitos", "CLT"],
    views: 950,
    createdAt: new Date("2024-06-25"),
    updatedAt: new Date("2024-06-27")
  },
  {
    _id: "3",
    title: "Como Funciona a Ação Contra Cobrança Indevida de Bancos?",
    slug: "acao-contra-cobranca-bancos",
    image: [{ imgUrl: "/assets/bg-4.png", public_id: "bank-law-1" }],
    isAvailable: true,
    category: "Direito do Consumidor",
    author: "Dr. Eduardo Lima",
    authorPic: "https://source.unsplash.com/100x100/?man,bank",
    published_date: new Date("2024-07-10"),
    reading_time: "6 min",
    content: "Muitas pessoas são vítimas de cobranças indevidas por bancos e financeiras. Saiba como agir judicialmente para recuperar valores pagos indevidamente e evitar novas cobranças.",
    tags: ["Bancos", "Cobrança", "Direitos do Consumidor"],
    views: 1100,
    createdAt: new Date("2024-07-05"),
    updatedAt: new Date("2024-07-07")
  },
  {
    _id: "4",
    title: "Como Funciona a Ação Contra Cobrança Indevida de Bancos?",
    slug: "acao-contra-cobranca-bancos",
    image: [{ imgUrl: "/assets/bg-4.png", public_id: "bank-law-1" }],
    isAvailable: true,
    category: "Direito do Consumidor",
    author: "Dr. Eduardo Lima",
    authorPic: "https://source.unsplash.com/100x100/?man,bank",
    published_date: new Date("2024-07-10"),
    reading_time: "6 min",
    content: "Muitas pessoas são vítimas de cobranças indevidas por bancos e financeiras. Saiba como agir judicialmente para recuperar valores pagos indevidamente e evitar novas cobranças.",
    tags: ["Bancos", "Cobrança", "Direitos do Consumidor"],
    views: 1100,
    createdAt: new Date("2024-07-05"),
    updatedAt: new Date("2024-07-07")
  }
];

// Criação do contexto com um valor inicial indefinido
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Componente Provider para envolver os componentes que precisam acessar o contexto
export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>(postsMock);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Extrai categorias únicas a partir dos posts
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

  // Função para buscar um post pelo slug
const getPostBySlug = (slug: string): Post | undefined => {
  return postsMock.find((post) => post.slug === slug);
};

  // Função para alternar a seleção de uma categoria
  const toggleCategory = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category) // Remove a categoria se já estiver selecionada
        : [...prevCategories, category] // Adiciona a categoria se não estiver selecionada
    );
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
    getPostBySlug,
    loading,
    setLoading,
    searchQuery,
    setSearchQuery,
    selectedCategories,
    toggleCategory,
    filteredPosts,
    categories,
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