// hooks/useMarkdownToHtml.ts
'use client';

import { markdownToHtml } from '@/app/(client)/blogs/components/Post Content';
import { useState, useEffect } from 'react';


export function useMarkdownToHtml(markdown: string) {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    const convertMarkdown = async () => {
      const result = await markdownToHtml(markdown);
      setHtmlContent(result);
    };
    
    convertMarkdown();
  }, [markdown]);

  return htmlContent;
}