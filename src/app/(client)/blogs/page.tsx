import Banner from "@/components/Banner"
import { BlogPostList } from "./components/blog-post-list"
import { Sidebar } from "./components/sidebar"

export default function Home() {
  return (
    <>
        <Banner banner="Blog" bg={"/assets/bg-4.png"}/>
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
        <BlogPostList />
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
    </>
  )
}

