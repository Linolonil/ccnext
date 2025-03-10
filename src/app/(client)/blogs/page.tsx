import { Suspense } from "react"
import type { Metadata } from "next"

import { getBlogPosts } from "@/actions/blog"

import { Skeleton } from "@/components/ui/skeleton"
import type { PostResponse } from "@/app/types/blog"
import BlogCard from "./components/blogCard"
import Pagination from "./components/pagination"
import BlogSidebar from "./components/blogSidebar"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read our latest articles and stay updated with the newest trends.",
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Parse page parameter
  const page =  Number( ((await searchParams.page))) || 1

  // Fetch blog posts
  const { posts, pagination } = await getBlogPosts(page)

  return (
  <>
    <div className="container mx-auto py-8 px-4">

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {/* Blog posts */}
        <div className="lg:col-span-2 xl:col-span-3">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-2">No posts found</h2>
              <p className="text-muted-foreground">There are no blog posts available at the moment.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {posts.map((post: PostResponse, index: number) => (
                  <BlogCard key={post._id.toString()} post={post} index={index} />
                ))}
              </div>

              <Pagination currentPage={pagination.page} totalPages={pagination.totalPages} />
            </>
          )}
        </div>

        {/* Sidebar */}
        <div>
          <Suspense fallback={<SidebarSkeleton />}>
            <BlogSidebar />
          </Suspense>
        </div>
      </div>
    </div>
    </>
  )
}

function SidebarSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-lg border bg-card shadow-sm">
          <div className="p-6">
            <Skeleton className="h-6 w-1/2 mb-4" />
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, j) => (
                <Skeleton key={j} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

