import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { type ComponentProps } from 'react';

const selectVariants = cva(
  [
    'w-full',
    'rounded',
    'border',
    'bg-white',
    'text-sm',
    'shadow-sm',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-blue-500',
    'transition-colors',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'dark:bg-slate-800',
    'dark:border-slate-700',
    'dark:text-slate-100',
  ],
);

type SelectProps = ComponentProps<'select'>;

export const Select = ({ className, children, ...props }: SelectProps) => (
  <select className={clsx(selectVariants(), className)} {...props}>
    {children}
  </select>
);
