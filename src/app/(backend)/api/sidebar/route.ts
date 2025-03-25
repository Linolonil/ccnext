// app/api/sidebar/route.ts
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/dbConnect';
import Post from '@/models/Post';
import { PostDocument } from '@/types';

export const revalidate = 3600; // Revalida a cada hora

export async function GET() {
  try {
    await connectDB();

    // Busca todos os posts de uma vez
    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .lean<PostDocument[]>();

    // Processa as categorias
    const categoryCount = posts.reduce((acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const categories = Object.keys(categoryCount).map((category) => ({
      name: category,
      count: categoryCount[category],
    }));

    // Posts mais recentes (5)
    const recentPosts = posts.slice(0, 5);

    // Posts mais visitados (5)
    const mostVisitedPosts = [...posts]
      .sort((a, b) => (b.views || 0) - (a.views || 0))
      .slice(0, 5);

    return NextResponse.json({
      success: true,
      data: {
        categories,
        recentPosts: recentPosts.map(formatPost),
        mostVisitedPosts: mostVisitedPosts.map(formatPost),
      }
    });

  } catch (error) {
    console.error('Error fetching sidebar data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch sidebar data' },
      { status: 500 }
    );
  }
}

// Função auxiliar para formatar os posts
function formatPost(post: PostDocument) {
  return {
    ...post,
    _id: post._id.toString(),
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  };
}