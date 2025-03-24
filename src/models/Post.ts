import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
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
  reading_time: string;
  published: boolean;
  views: number; 
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true },
    author: { type: String, required: true },
    coverImage: {
      url: { type: String, required: true },
      publicId: { type: String, required: true },
    },
    category: { type: String, required: true },
    tags: { type: [String], default: [] },
    reading_time: { type: String, required: true },
    published: { type: Boolean, default: false },
    views: { type: Number, default: 2 }, 
  },
  { timestamps: true },
);

export default mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);