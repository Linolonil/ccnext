'use server';

import { connectDB } from '@/lib/dbConnect';
import Post from '@/models/Post';
import { PostDocument, PostTypes } from '@/types';

export async function fetchPosts() {
    await connectDB();
    
      const posts = await Post.find({}).lean<PostDocument[]>();
    
      const formattedPosts = posts.map(post => ({
          ...post,
          _id: post._id.toString(),
          createdAt: new Date(post.createdAt),
          updatedAt: new Date(post.updatedAt), 
       })) as PostTypes[];
       
     return formattedPosts
   }

   export async function getPostById(slug: string) {
    await connectDB();
    
    try {
      const post = await Post.findOne({ slug }).lean();
      if (!post) return null;

      const formattedPosts = post as PostTypes;
     
      return formattedPosts
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  }
