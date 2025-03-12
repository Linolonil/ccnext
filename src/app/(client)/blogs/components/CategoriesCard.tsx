import React from "react"
import { Category } from "../../context/blog-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CategoriesCardProps {
  categories: Category[]
  toggleCategory: (category: string) => void
}

export const CategoriesCard: React.FC<CategoriesCardProps> = ({ categories, toggleCategory }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categorias</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name} className="flex justify-between">
              <button
                onClick={() => toggleCategory(category.name)} // Usa a função do contexto
                className="text-left text-muted-foreground hover:text-primary hover:underline"
              >
                {category.name}
              </button>
              <span className="text-sm text-muted-foreground">({category.count})</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
