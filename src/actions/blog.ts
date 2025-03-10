"use server"

import connectDB from "@/lib/dbConnect"
import Post from "@/models/Posts"
import type { BlogPostsResponse, CategoryResult, PostResponse, TagResult } from "@/app/types/blog"

export async function getBlogPosts({ page = 1, limit = 6, search = "", category = "", tag = "" }: BlogSearchParams): Promise<BlogPostsResponse> {
  await connectDB();

  const skip = (page - 1) * limit;
  const query: { isAvailable: boolean; category?: string; tags?: string; $text?: { $search: string } } = { isAvailable: true };

  if (category) query.category = category;
  if (tag) query.tags = tag;
  if (search) query.$text = { $search: search };

  const posts = await Post.find(query)
    .sort({ published_date: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  // Formata os posts para o tipo PostCard
  const formattedPosts: PostCard[] = posts.map((post) => ({
    _id: post._id.toString(), // Converte ObjectId para string
    title: post.title,
    slug: post.slug,
    published_date: post.published_date.toISOString(), // Converte Date para string
    category: post.category,
    image: post.image.map((img) => ({
      imgUrl: img.imgUrl?.toString() || "",
      public_id: img.public_id?.toString() || "",
    })),
    tags: post.tags,
    isAvailable: post.isAvailable,
    views: post.views,
    content: post.content,
  }));

  const total = await Post.countDocuments(query);

  return {
    posts: formattedPosts,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
}

export async function getBlogPost(slug: string): Promise<PostCard | null> {
  await connectDB();

  const post = await Post.findOne({ slug, isAvailable: true }).lean();

  if (!post) {
    return null;
  }

  // Formata o post para o tipo PostCard
  const formattedPost: PostCard = {
    _id: post._id.toString(), // Converte ObjectId para string
    title: post.title,
    slug: post.slug,
    published_date: post.published_date.toISOString(), // Converte Date para string
    category: post.category,
    image: post.image.map((img) => ({
      imgUrl: img.imgUrl?.toString() || "",
      public_id: img.public_id?.toString() || "",
    })),
    tags: post.tags,
    isAvailable: post.isAvailable,
    views: post.views,
    content: post.content,
  };

  // Atualiza as views sem aguardar a resposta
  Post.updateOne({ _id: post._id }, { $inc: { views: 1 } }).exec();

  return formattedPost;
}

export async function getCategories(): Promise<CategoryResult[]> {
  await connectDB()

  try {
    // Get unique categories with count
    const categories = await Post.aggregate([
      { $match: { isAvailable: true } },
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ])

    return categories as CategoryResult[]
  } catch (error) {
    console.error("Error fetching categories:", error)
    throw new Error("Failed to fetch categories")
  }
}

export async function getTags(): Promise<TagResult[]> {
  await connectDB()

  try {
    // Get unique tags with count
    const tags = await Post.aggregate([
      { $match: { isAvailable: true } },
      { $unwind: "$tags" },
      { $group: { _id: "$tags", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 20 }, // Limit to top 20 tags
    ])

    return tags as TagResult[]
  } catch (error) {
    console.error("Error fetching tags:", error)
    throw new Error("Failed to fetch tags")
  }
}

export async function getRecentPosts(limit = 5): Promise<PostCard[]> {
  await connectDB();

  const posts = await Post.find({ isAvailable: true })
    .sort({ published_date: -1 })
    .limit(limit)
    .select("title slug published_date _id image tags")
    .lean();

  return posts.map((post) => ({
    _id: post._id.toString(), // Converte ObjectId para string
    title: post.title,
    slug: post.slug,
    published_date: post.published_date.toISOString(), // Converte Date para string
    category: post.category,
    image: post.image.map((img) => ({
      imgUrl: img.imgUrl?.toString() || "",
      public_id: img.public_id?.toString() || "",
    })),
    tags: post.tags,
    isAvailable: post.isAvailable,
    views: post.views || 0,
    content: post.content || "",
  }));
}

export async function incrementViewCount(slug: string): Promise<number> {
  await connectDB()

  try {
    const post = await Post.findOneAndUpdate({ slug }, { $inc: { views: 1 } }, { new: true })

    if (!post) {
      throw new Error("Post not found")
    }

    return post.views
  } catch (error) {
    console.error("Error incrementing view count:", error)
    throw new Error("Failed to increment view count")
  }
}

