import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { type ComponentProps } from 'react';

export const sidebarVariants = cva(
  'flex flex-col bg-slate-100 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full',
  {
    variants: {
      width: {
        sm: 'w-48',
        md: 'w-64',
        lg: 'w-80',
      },
      position: {
        left: 'left-0',
        right: 'right-0',
      },
    },
    defaultVariants: {
      width: 'md',
      position: 'left',
    },
  }
);

type SidebarVariants = VariantProps<typeof sidebarVariants>;
type SidebarProps = ComponentProps<'aside'> & SidebarVariants;

export const Sidebar = ({ width, position, className, ...props }: SidebarProps) => {
  return <aside className={clsx(sidebarVariants({ width, position, className }))} {...props} />;
};
