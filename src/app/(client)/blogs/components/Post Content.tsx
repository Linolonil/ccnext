// components/PostContent.tsx
import { remark } from 'remark';
import html from 'remark-html';

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

interface PostContentProps {
  content: string;
}

export async function PostContent({ content }: PostContentProps) {
  const htmlContent = await markdownToHtml(content);
  
  return (
    <div 
      className="prose dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }} 
    />
  );
}