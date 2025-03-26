"use server";

import { connectDB } from "@/lib/dbConnect";
import Post from "@/models/Post";

export async function incrementViews(slug: string) {
  try {
    await connectDB();
    await Post.updateOne(
      { slug },
      { $inc: { views: 1 } }
    );
  } catch (error) {
    console.error("Failed to increment views:", error);
  }
}