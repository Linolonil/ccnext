// components/pagination.tsx
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  pagination: {
    total: number
    page: number
    limit: number
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
  currentCategory?: string
  currentSearch?: string
}

export default function Pagination({ 
  pagination,
  currentCategory,
  currentSearch 
}: PaginationProps) {
  const { page, totalPages } = pagination

  // Função para construir a URL com todos os parâmetros
  const buildUrl = (pageNum: number) => {
    const params = new URLSearchParams();
    params.set('page', pageNum.toString());
    if (currentCategory) params.set('category', currentCategory);
    if (currentSearch) params.set('search', currentSearch);
    
    return `?${params.toString()}`;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button 
        asChild
        variant="outline" 
        size="icon" 
        disabled={page === 1} 
        className="h-9 w-9"
      >
        <Link href={buildUrl(page - 1)} scroll={false}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Link>
      </Button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <Button
            key={pageNum}
            asChild
            variant={page === pageNum ? "default" : "outline"}
            size="icon"
            className="h-9 w-9"
          >
            <Link href={buildUrl(pageNum)} scroll={false}>
              {pageNum}
            </Link>
          </Button>
        ))}
      </div>

      <Button 
        asChild
        variant="outline" 
        size="icon" 
        disabled={page === totalPages} 
        className="h-9 w-9"
      >
        <Link href={buildUrl(page + 1)} scroll={false}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Link>
      </Button>
    </div>
  )
}