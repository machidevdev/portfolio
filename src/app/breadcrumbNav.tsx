'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useAtom } from 'jotai';
import { selectedItemAtom, virtualPathAtom } from '@/lib/atoms';

export default function BreadcrumbNav() {
  const [virtualPath, setVirtualPath] = useAtom(virtualPathAtom);
  const [, setSelectedItem] = useAtom(selectedItemAtom);
  const paths = virtualPath.split('/').filter((p) => p);

  const handlePathClick = (index: number) => {
    const newPath = '/src/' + paths.slice(1, index + 1).join('/');
    const selectedPath = paths.slice(1, index + 1).join('/');

    setVirtualPath(newPath);
    setSelectedItem(selectedPath || null);
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="cursor-pointer"
            onClick={() => {
              setVirtualPath('/src');
              setSelectedItem(null);
            }}
          >
            src
          </BreadcrumbLink>
        </BreadcrumbItem>

        {paths.slice(1).map((path, index) => {
          const isLast = index === paths.length - 2;

          return (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem key={path}>
                {isLast ? (
                  <BreadcrumbPage>{path}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    className="cursor-pointer"
                    onClick={() => handlePathClick(index + 1)}
                  >
                    {path}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
