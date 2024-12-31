'use client';

import Column from './column';
import { useAtom } from 'jotai';
import { selectedItemAtom } from '@/lib/atoms';
import { useEffect, useState } from 'react';
import { remark } from 'remark';
import html from 'remark-html';

export default function RightColumn() {
  const [selectedItem] = useAtom(selectedItemAtom);
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      if (!selectedItem) return;

      try {
        console.log('Selected Item:', selectedItem);
        const path = selectedItem.toLowerCase();
        console.log('Lowercased path:', path);
        let mdPath;

        // Handle different path structures
        if (path.startsWith('projects/')) {
          mdPath = path.endsWith('.md') ? path : `${path}.md`;
        } else {
          mdPath = path;
        }

        console.log('Final path to fetch:', `/content/${mdPath}`);
        console.log('Full URL:', `${window.location.origin}/content/${mdPath}`);

        const response = await fetch(`/content/${mdPath}`);
        if (!response.ok) {
          console.error(
            'Failed to fetch:',
            response.status,
            response.statusText
          );
          throw new Error('Failed to fetch content');
        }

        const markdown = await response.text();
        console.log('Loaded markdown:', markdown.slice(0, 100));

        const processedContent = await remark().use(html).process(markdown);
        setContent(processedContent.toString());
      } catch (error) {
        console.error('Failed to load content:', error);
        setContent('<h1>Failed to load content</h1>');
      }
    };

    loadContent();
  }, [selectedItem]);

  const isMarkdownContent =
    selectedItem?.includes('.md') || selectedItem?.includes('Projects/');

  if (!isMarkdownContent) return null;

  return (
    <Column className="h-full overflow-hidden border-l-0">
      <div className="h-full overflow-y-auto pr-4">
        <article
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: content || '' }}
        />
      </div>
    </Column>
  );
}
