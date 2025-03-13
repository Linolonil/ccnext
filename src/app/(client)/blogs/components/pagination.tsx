import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  goToPage: (page: number) => void
  goToPreviousPage: () => void
  goToNextPage: () => void
}

export function Pagination({ currentPage, totalPages, goToPage, goToPreviousPage, goToNextPage }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button variant="outline" size="icon" onClick={goToPreviousPage} disabled={currentPage === 1} className="h-9 w-9">
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="icon"
            onClick={() => goToPage(page)}
            className="h-9 w-9"
          >
            {page}
          </Button>
        ))}
      </div>

      <Button variant="outline" size="icon" onClick={goToNextPage} disabled={currentPage === totalPages} className="h-9 w-9">
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  )
}
