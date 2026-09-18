import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from '../context/RouterContext';

export interface BreadcrumbCrumb {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  crumbs: BreadcrumbCrumb[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`py-3 text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 list-none m-0 p-0">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors"
            title="EasyConverter Home"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={crumb.url} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-[#64748B]/50 dark:text-[#94A3B8]/50 shrink-0" aria-hidden="true" />
              {isLast ? (
                <span className="font-semibold text-[#0F172A] dark:text-[#F8FAFC] line-clamp-1" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  to={crumb.url}
                  className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors whitespace-nowrap"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
