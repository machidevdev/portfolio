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
        const path = selectedItem.toLowerCase();
        let mdPath;

        // Handle different path structures
        if (path.startsWith('projects/')) {
          mdPath = path.endsWith('.md') ? path : `${path}.md`;
        } else if (path.toLowerCase() === 'readme.md') {
          mdPath = 'README.md'; // Use uppercase for README.md
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
      <div className="h-full overflow-y-auto pr-4 md:pb-0 pb-20">
        <article
          className="
            prose-sm prose-invert max-w-none
            prose-h1:text-2xl prose-h1:font-bold prose-h1:mb-4
            prose-h2:text-xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4
            prose-p:text-card-foreground prose-p:leading-relaxed
            prose-li:text-card-foreground
            prose-a:text-secondary-foreground prose-a:no-underline hover:prose-a:underline
            prose-ul:my-4 prose-li:my-2
            prose-code:text-secondary-foreground prose-code:bg-muted/50 prose-code:px-1 prose-code:rounded-md
            [&_ul]:list-none [&_ul]:pl-0
            [&_li]:relative [&_li]:pl-6
            [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.6em]
            [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-secondary-foreground
          "
          dangerouslySetInnerHTML={{ __html: content || '' }}
        />
      </div>
    </Column>
  );
}
