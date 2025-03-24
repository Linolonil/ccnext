import React, { useState } from "react";
import { Search } from "lucide-react";
import { useBlog } from "../../../context/blog-context";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchCard() {
  const { setSearchQuery } = useBlog();
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    setSearchQuery(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-lg font-semibold">
            <Search className="mr-2 h-5 w-5" />
            Pesquisar Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="search"
              placeholder="Buscar artigos..."
              className="flex-1"
              value={searchInput}
              onChange={handleSearchChange}
            />
            <Button type="submit" size="sm">
              Buscar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}