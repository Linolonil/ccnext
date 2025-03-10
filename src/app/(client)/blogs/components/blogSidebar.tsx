import Link from "next/link"
import { Calendar, Hash, Newspaper } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

import { getCategories, getRecentPosts, getTags } from "@/actions/blog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CategoryResult, PostResponse, TagResult } from "@/app/types/blog"

export default async function BlogSidebar() {
  // Fetch data in parallel
  const [categories, tags, recentPosts] = await Promise.all([getCategories(), getTags(), getRecentPosts(5)])

  return (
    <div className="space-y-6">
      {/* Recent Posts */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <Newspaper className="h-5 w-5" />
            Recent Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {recentPosts.map((post: PostResponse) => (
              <li key={post._id.toString()} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDistanceToNow(new Date(post.published_date), { addSuffix: true })}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <Hash className="h-5 w-5" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category: CategoryResult) => (
              <Link key={category._id} href={`/blog?category=${encodeURIComponent(category._id)}`}>
                <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                  {category._id} ({category.count})
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <Hash className="h-5 w-5" />
            Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: TagResult) => (
              <Link key={tag._id} href={`/blog?tag=${encodeURIComponent(tag._id)}`}>
                <Badge variant="outline" className="hover:bg-primary/10 transition-colors">
                  {tag._id} ({tag.count})
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

