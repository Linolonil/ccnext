// app/components/categories-card.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tag } from "lucide-react"
import Link from "next/link"

interface Category {
  name: string
  count: number
}

interface CategoriesCardProps {
  categories: Category[]
}

export function CategoriesCard({ categories }: CategoriesCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Tag className="h-5 w-5" />
          Categorias
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center justify-between">
              <Link
                href={`/blogs?category=${encodeURIComponent(category.name)}`}
                className="text-sm hover:text-primary hover:underline"
              >
                {category.name}
              </Link>
              <span className="text-xs font-medium bg-muted rounded-full px-2 py-1">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}