'use client';

import { FileText } from 'lucide-react';
import Column from './column';
import ColumnItem from './columnItem';
import ExpCard from './expCard';
import { useAtom } from 'jotai';
import { selectedItemAtom, virtualPathAtom } from '@/lib/atoms';

const projects = [
  {
    title: 'CHKN',
    description: 'Track flows of token liquidity on Solana.',
    path: 'chkn',
  },
  {
    title: 'Isekai',
    description: 'Yield. Liquidity. Optimized.',
    path: 'isekai',
  },
  {
    title: 'Xultra',
    description:
      'Track and analyze daos.fun party round participants, and keep them accountable.',
    path: 'xultra',
  },
  {
    title: 'Shishi',
    description: 'Mint page for Shishi.',
    path: 'shishi',
  },
  {
    title: 'Niqady',
    description: 'Showcase website for Niqady.',
    path: 'niqady',
  },
  {
    title: 'Portfolio',
    description: 'My portfolio website.',
    path: 'portfolio',
  },
  {
    title: 'TG Logger',
    description: 'A Typescript template to interact with the telegram api.',
    path: 'tg-logger',
  },
  {
    title: 'FE Starter',
    description: 'A template to kickstart a web3 EVM frontend project.',
    path: 'fe-starter',
  },
];

export default function LeftColumn() {
  const [selectedItem, setSelectedItem] = useAtom(selectedItemAtom);
  const [virtualPath, setVirtualPath] = useAtom(virtualPathAtom);

  const handleItemClick = (item: string, path: string) => {
    console.log('Clicked item:', item);
    console.log('Path:', path);
    console.log('Will become:', `Projects/${path}`);
    setSelectedItem(item);
    setVirtualPath(`/src/${path}`);

    if (item === 'Projects') {
      const projectsItem = document.querySelector(
        '[data-section="Projects"]'
      ) as HTMLElement;
      if (projectsItem) {
        projectsItem.click();
      }
    }
  };

  return (
    <Column className="h-full overflow-hidden">
      <div className="h-full overflow-y-auto pr-4">
        <ColumnItem
          label="README.md"
          icon={<FileText className="h-4 w-4" />}
          selected={selectedItem === 'README.md'}
          onClick={() => handleItemClick('README.md', 'README.md')}
        />

        <ColumnItem
          label="Projects"
          expandable
          defaultExpanded={virtualPath.includes('Projects')}
          selected={
            selectedItem === 'Projects' ||
            (selectedItem?.startsWith('Projects/') &&
              !selectedItem?.includes('/'))
          }
          onClick={() => handleItemClick('Projects', 'Projects')}
          data-section="Projects"
        >
          <div className="flex flex-col gap-2.5 pl-1">
            {projects.map((project) => (
              <ExpCard
                key={project.path}
                title={project.title}
                description={project.description}
                onClick={() =>
                  handleItemClick(
                    `Projects/${project.path}`,
                    `Projects/${project.path}`
                  )
                }
                selected={selectedItem === `Projects/${project.path}`}
              />
            ))}
          </div>
        </ColumnItem>
      </div>
    </Column>
  );
}
