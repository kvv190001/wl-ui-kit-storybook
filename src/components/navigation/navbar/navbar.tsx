import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { type ComponentProps } from 'react';

export const navbarVariants = cva(
  'flex items-center justify-between px-4 py-2 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900',
  {
    variants: {
      position: {
        static: 'relative',
        sticky: 'sticky top-0 z-50',
        fixed: 'fixed top-0 left-0 right-0 z-50',
      },
    },
    defaultVariants: {
      position: 'static',
    },
  }
);

type NavbarVariants = VariantProps<typeof navbarVariants>;
type NavbarProps = ComponentProps<'nav'> & NavbarVariants;

export const Navbar = ({ position, className, ...props }: NavbarProps) => {
  return <nav className={clsx(navbarVariants({ position, className }))} {...props} />;
};
