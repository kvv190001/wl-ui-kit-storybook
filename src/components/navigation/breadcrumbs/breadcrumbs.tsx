import { cva } from 'class-variance-authority';
import { type ComponentProps } from 'react';
import clsx from 'clsx';

export const breadcrumbsVariants = cva(
  'flex items-center space-x-1 text-sm text-slate-600 dark:text-slate-300'
);

type BreadcrumbsProps = ComponentProps<'nav'> & {
  items: { label: string; href?: string }[];
};

export const Breadcrumbs = ({ items, className, ...props }: BreadcrumbsProps) => {
  return (
    <nav className={clsx(breadcrumbsVariants({ className }))} {...props} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {item.href ? (
              <a href={item.href} className="hover:underline">{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && <span className="mx-1 text-slate-400">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};
