import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useBlog } from "../../../context/blog-context";

// interface SearchCardProps {
//   searchInput: string;
//   setSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }
export function SearchCard(){
  const { setSearchQuery } = useBlog();

  const [searchInput, setSearchInput] = useState<string>("");


    // Update search input and context query as the user types
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value);
      setSearchQuery(e.target.value);
    };
  return (
    <Card>
      <CardContent>
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar artigos..."
            className="pl-8"
            value={searchInput}
            onChange={handleSearchChange}
            />
      </CardContent>
    </Card>
  )
}
