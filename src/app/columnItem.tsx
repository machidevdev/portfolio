'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ColumnItemProps {
  label: string;
  icon?: React.ReactNode;
  expandable?: boolean;
  defaultExpanded?: boolean;
  selected?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  'data-section'?: string;
}

export default function ColumnItem({
  label,
  icon,
  expandable = false,
  defaultExpanded = false,
  selected = false,
  onClick,
  children,
  'data-section': dataSection,
}: ColumnItemProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleClick = () => {
    if (expandable) {
      setIsExpanded(!isExpanded);
    }
    onClick?.();
  };

  return (
    <div>
      <div
        className={`flex items-center justify-between cursor-pointer p-2 select-none ${
          selected ? 'bg-accent' : 'hover:bg-accent/10'
        }`}
        onClick={handleClick}
        data-section={dataSection}
      >
        <div className="flex items-center gap-2">
          {icon && !expandable && icon}
          {expandable &&
            (isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            ))}
          <span>{label}</span>
        </div>
      </div>
      {expandable && isExpanded && <div className="">{children}</div>}
    </div>
  );
}
