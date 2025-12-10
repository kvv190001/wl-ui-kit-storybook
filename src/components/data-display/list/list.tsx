import clsx from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';
import { type ComponentProps } from 'react';

export const listVariants = cva(['divide-y', 'divide-slate-200', 'dark:divide-slate-700'], {
  variants: {
    variant: {
      plain: [],
      bordered: ['border', 'rounded-md', 'overflow-hidden'],
    },
  },
  defaultVariants: {
    variant: 'plain',
  },
});

type ListProps = ComponentProps<'ul'> & VariantProps<typeof listVariants>;

export const List = ({ variant, className, ...props }: ListProps) => (
  <ul className={clsx(listVariants({ variant, className }))} {...props} />
);

export const ListItem = ({ className, ...props }: ComponentProps<'li'>) => (
  <li className={clsx('p-2 hover:bg-slate-50 dark:hover:bg-slate-800', className)} {...props} />
);
