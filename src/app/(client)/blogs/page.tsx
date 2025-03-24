import { BlogPostList } from "./components/blog-post-list";

export default function Home() {
  return (
   <div className="space-y-8">
  <div>
    <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Blog de Insights Jurídicos</h1>
    <p className="mt-2 text-lg text-muted-foreground">
      Análises especializadas e recursos de nossos profissionais do direito
    </p>
  </div>
  <BlogPostList />
</div>
  );
}
