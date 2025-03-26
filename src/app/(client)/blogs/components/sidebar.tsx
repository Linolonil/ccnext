import { CategoriesCard } from "./CategoriesCard";
import { MostVisitedCard } from "./MostVisitedCard";
import { RecentPostsCard } from "./RecentPostsCard";


export async function Sidebar() {
  const { serverUrl } = process.env

  const response = await fetch(`${serverUrl}/api/sidebar`, {
    next: {
      tags: ['sidebar'],
      revalidate: 3600 
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch sidebar data');
  }

  const { data } = await response.json();

  return (
    <div className="space-y-8 ">
      <CategoriesCard categories={data.categories} />
      <MostVisitedCard posts={data.mostVisitedPosts} />
      <RecentPostsCard recentPosts={data.recentPosts} />
    </div>
  );
}
