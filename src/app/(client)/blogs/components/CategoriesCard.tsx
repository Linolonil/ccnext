"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
      <CardHeader>
        <CardTitle>Categorias</CardTitle>
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
              <span className="text-sm text-muted-foreground">({category.count})</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

