import type { Document } from "mongoose"

export interface IImage {
  imgUrl: string
  public_id: string
}

export interface IPost extends Document {
  title: string
  slug: string
  image: IImage[]
  isAvailable: boolean
  category: string
  author: string
  authorPic?: string
  published_date: Date
  reading_time: string
  content: string
  tags: string[]
  views: number
  createdAt: Date
  updatedAt: Date
}

export interface PostResponse {
  _id: string
  title: string
  slug: string
  image: IImage[]
  isAvailable: boolean
  category: string
  author: string
  authorPic?: string
  published_date: Date
  reading_time: string
  content: string
  tags: string[]
  views: number
  createdAt: Date
  updatedAt: Date
}

export interface PaginationResult {
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface BlogPostsResponse {
  posts: PostResponse[]
  pagination: PaginationResult
}

export interface CategoryResult {
  _id: string
  count: number
}

export interface TagResult {
  _id: string
  count: number
}

export interface BlogSearchParams {
  page?: number
  limit?: number
  search?: string
  category?: string
  tag?: string
}

