'use client';

import BreadcrumbNav from './breadcrumbNav';

export default function Navbar() {
  return (
    <div className="w-full space-y-2 p-4 bg-background">
      <h1 className="text-4xl">MACHI</h1>
      <BreadcrumbNav />
    </div>
  );
}
