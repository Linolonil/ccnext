// app/blogs/page.tsx
import { BlogPostCard } from "./components/BlogPostCard"
import Pagination from "./components/pagination"
import Link from 'next/link'
import { X } from 'lucide-react'
import { AppSearchParams, PostTypes } from "@/types";


export interface PageProps {
  searchParams: Promise<AppSearchParams>;
}

export default async function Home({ searchParams }: PageProps) {
 
  const resolvedParams = await searchParams;

  const page = Number(resolvedParams.page) || 1;
  const category = Array.isArray(resolvedParams.category) 
    ? resolvedParams.category[0] 
    : resolvedParams.category;
  const search = Array.isArray(resolvedParams.search) 
    ? resolvedParams.search[0] 
    : resolvedParams.search;

    
  // Constrói a URL da API
  const { serverUrl } = process.env;
  const apiUrl = new URL(`${serverUrl}/api/posts`);
  
  // Adiciona parâmetros de consulta
  apiUrl.searchParams.set('page', page.toString());
  if (category) apiUrl.searchParams.set('category', category);
  if (search) apiUrl.searchParams.set('search', search);

  const response = await fetch(apiUrl.toString(), {
    next: {
      tags: [
        'posts',
        `page-${page}`,
        ...(category ? [`category-${category}`] : []),
        ...(search ? [`search-${search}`] : [])
      ],
      revalidate: 3600
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  
  const { data, pagination } = await response.json()

const buildUrlWithoutParam = (paramToRemove: 'category' | 'search' | 'page') => {
  const params = new URLSearchParams();
  
  if (paramToRemove !== 'page' && page > 1) {
    params.set('page', page.toString());
  }
  
  if (paramToRemove !== 'category' && category) {
    params.set('category', category);
  }
  
  if (paramToRemove !== 'search' && search) {
    params.set('search', search);
  }
  
  return `?${params.toString()}`;
};

  return (
    <div className="flex flex-col min-h-full ">
    {/* Cabeçalho e conteúdo principal */}
    <div className="flex-grow space-y-8">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Blog de Insights Jurídicos</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Análises especializadas e recursos de nossos profissionais do direito
        </p>
      </div>
  
      {/* Filtros ativos */}
      {(category || search) && (
        <div className="bg-accent p-4 rounded-lg">
          <p className="text-sm flex flex-wrap gap-3">
            {category && (
              <Link 
                href={buildUrlWithoutParam('category')}
                className="hover:underline inline-flex items-center"
              >
                Categoria: {category}
                <X className="ml-1 h-3 w-3" />
              </Link>
            )}
            {search && (
              <Link 
                href={buildUrlWithoutParam('search')}
                className="hover:underline inline-flex items-center"
              >
                Busca: &quot;{search}&quot;
                <X className="ml-1 h-3 w-3" />
              </Link>
            )}
          </p>
        </div>
      )}
  
      {/* Lista de posts */}
      <div className="grid gap-6">
        {data.length > 0 ? (
          data.map((post: PostTypes) => (
            <BlogPostCard key={post._id} post={post} />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum post encontrado</p>
          </div>
        )}
      </div>
    </div>
  
    {/* Paginação (sempre no final) */}
    <div className="mt-auto py-8">
      {pagination.totalPages > 1 && (
        <Pagination 
          pagination={pagination}
          currentCategory={category}
          currentSearch={search}
        />
      )}
    </div>
  </div>
  )
}