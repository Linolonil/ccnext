import { Types } from "mongoose"

export interface PostTypes {
  _id: string
  title: string
  slug: string
  content: string
  excerpt: string
  author: string
  coverImage: {
    url:string
    publicId:string
  }
  category: string
  tags: string[]
  published: boolean
  createdAt: Date
  updatedAt: Date
  authorId: string
  authorName: string
  reading_time?: string
  views: number; 
  __v?: number; 
}

export interface PostDocument {
  _id: Types.ObjectId; // Ou use `Types.ObjectId` se preferir
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
  reading_time: string;
  views: number;
  __v?: number;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
}

