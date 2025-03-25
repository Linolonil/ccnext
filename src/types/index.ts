// types/index.ts
import { Types } from "mongoose";

// Tipos para Posts
export interface PostTypes {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  coverImage: {
    url: string;
    publicId: string;
  };
  category: string;
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  authorName: string;
  reading_time?: string;
  views: number;
  __v?: number;
}

export interface PostDocument extends Omit<PostTypes, '_id'> {
  _id: Types.ObjectId;
}

// Tipos para Categorias
export interface Category {
  _id: string;
  name: string;
  slug: string;
}

// Tipos para Parâmetros de Busca
export interface PaginationParams {
  page?: string;
  limit?: string;
}

export interface FilterParams {
  category?: string;
  tags?: string | string[];
  author?: string;
}

export interface SortParams {
  sort?: 'asc' | 'desc' | string;
}

// Tipo principal para SearchParams
export type AppSearchParams = PaginationParams & FilterParams & SortParams & {
  search?: string;
  [key: string]: string | string[] | undefined;
};

// Tipo para as props das páginas


// Tipo para o retorno da API de posts
export interface PostsResponse {
  data: PostTypes[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}