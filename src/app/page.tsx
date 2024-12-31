'use client';

import Navbar from './navbar';
import { JetBrains_Mono } from 'next/font/google';
import RightColumn from './rightColumn';
import LeftColumn from './leftColumn';
import { useAtom } from 'jotai';
import { selectedItemAtom } from '@/lib/atoms';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const jetbrains = JetBrains_Mono({ subsets: ['latin'] });

export default function Home() {
  const [selectedItem] = useAtom(selectedItemAtom);
  const isMarkdownContent =
    selectedItem?.includes('.md') || selectedItem?.includes('Projects/');
  const isDesktop = useMediaQuery('(min-width: 768px)');

  console.log('Selected Item:', selectedItem);
  console.log('Is Markdown:', isMarkdownContent);

  return (
    <div className={`flex flex-col h-screen ${jetbrains.className} p-2.5`}>
      <Navbar />
      <div className="flex flex-1 bg-card overflow-hidden">
        {(!isMarkdownContent || isDesktop) && (
          <div className="w-full md:w-5/12 h-full">
            <LeftColumn />
          </div>
        )}
        {isMarkdownContent && (
          <div className="w-full md:w-7/12 h-full">
            <RightColumn />
          </div>
        )}
      </div>
    </div>
  );
}
