import mongoose, { Schema } from "mongoose"
import type { IPost } from "@/types/blog"

// Check if the model already exists to prevent recompilation in development
const postSchema = new Schema<IPost>(
  {
    title: { type: String, required: true, index: true },
    slug: { type: String, required: true, index: true },
    image: [
      {
        imgUrl: { type: String, default: "" },
        public_id: { type: String, default: "" },
      },
    ],
    isAvailable: { type: Boolean, default: true },
    category: { type: String, required: true, index: true },
    author: { type: String, required: true },
    authorPic: { type: String },
    published_date: { type: Date, default: Date.now },
    reading_time: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], required: true },
    views: { type: Number, default: 0 },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt`
  },
)

// Add text index for search
postSchema.index({ title: "text", tags: "text", category: "text" })

// Use mongoose.models to check if the model exists already to prevent recompilation in development
const Post = mongoose.models.Post || mongoose.model<IPost>("Post", postSchema)

export default Post

