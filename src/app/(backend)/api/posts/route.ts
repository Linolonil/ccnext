import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/dbConnect';
import Post from '@/models/Post';
import { PostDocument } from '@/types';
import { SortOrder } from 'mongoose';


interface QueryParams {
  page?: string;
  limit?: string;
  category?: string;
  sort?: string;
}

interface PostFilter {
    category?: string;
    published: boolean;
  }

  export async function GET(request: Request) {
    try {
      await connectDB();
  
      const { searchParams } = new URL(request.url);
      const queryParams: QueryParams = Object.fromEntries(searchParams.entries());
  
      // Configuração da paginação
      const page = parseInt(queryParams.page || '1');
      const limit = parseInt(queryParams.limit || '6');
      const skip = (page - 1) * limit;
  
      // Construir query de filtro
      const filter: PostFilter = { published: true }; // Apenas posts publicados
      
      if (queryParams.category) {
        filter.category = queryParams.category;
      }
  
      // Ordenação (padrão: mais recentes primeiro)
      const sortOption: Record<string, SortOrder> = queryParams.sort === 'oldest' 
      ? { createdAt: 1 } 
      : { createdAt: -1 };
  
      // Buscar posts
      const posts = await Post.find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(limit)
      .lean<PostDocument[]>();
  
      // Contar total de posts
      const total = await Post.countDocuments(filter);
  
      // Formatar os dados
      const formattedPosts = posts.map(post => ({
        ...post,
        _id: post._id.toString(),
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
      }));
  
      return NextResponse.json({
        success: true,
        data: formattedPosts,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
          hasNextPage: page < Math.ceil(total / limit),
          hasPrevPage: page > 1,
        }
      });
  
    } catch (error) {
      console.error('Error fetching posts:', error);
      return NextResponse.json(
        { 
          success: false,
          error: 'Failed to fetch posts',
          message: error instanceof Error ? error.message : 'Unknown error'
        },
        { status: 500 }
      );
    }
  }
  