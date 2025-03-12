import React, { FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface SearchCardProps {
  searchInput: string
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
  handleSearch: (e: FormEvent) => void
}

export const SearchCard: React.FC<SearchCardProps> = ({ searchInput, setSearchInput, handleSearch }) => {
  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar artigos..."
            className="pl-8"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button type="submit" className="sr-only">
            Pesquisar
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
