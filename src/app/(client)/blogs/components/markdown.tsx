// components/MarkdownViewer.tsx
'use client'

import MarkdownPreview from '@uiw/react-markdown-preview'
import remarkGfm from 'remark-gfm'

interface MarkdownViewerProps {
  content: string
}

export function MarkdownViewerr({ content }: MarkdownViewerProps) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <MarkdownPreview 
        source={content}
        remarkPlugins={[remarkGfm]}
        style={{ 
          backgroundColor: 'transparent',
          fontFamily: 'inherit',
          padding: 0
        }}
      />
    </div>
  )
}