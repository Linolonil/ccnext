import { BlogPostList } from "./components/blog-post-list";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-12 ">
          <div className="lg:col-span-2">
            <BlogPostList />
          </div>
      </div>
    </>
  );
}
