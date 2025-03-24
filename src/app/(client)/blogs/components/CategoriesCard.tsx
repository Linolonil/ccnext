"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tag } from "lucide-react"

interface Category {
  name: string
  count: number
}

interface CategoriesCardProps {
  categories: Category[]
  selectedCategories: string[]
  toggleCategory: (category: string) => void
}

export const CategoriesCard: React.FC<CategoriesCardProps> = ({ categories, toggleCategory, selectedCategories }) => {
  return (
    <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-lg font-semibold">
            <Tag className="mr-2 h-5 w-5" />
            Categorias
          </CardTitle>
        </CardHeader>
        <CardContent>
         
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name} className="flex justify-between">
              <button
                onClick={() => toggleCategory(category.name)}
                className={`text-left hover:text-primary hover:underline cursor-pointer ${
                  selectedCategories.includes(category.name) ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                {category.name}
              </button>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-bold">{category.count}</span>            </li>
          ))}
        </ul>

        </CardContent>
      </Card>
  )
}


