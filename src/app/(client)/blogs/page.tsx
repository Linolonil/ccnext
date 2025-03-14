import { BlogPostList } from "./components/blog-post-list";

export default function Home() {
  return (
    <>
      <div >
          <div className="lg:col-span-2 ">
            <BlogPostList />
          </div>
      </div>
    </>
  );
}
