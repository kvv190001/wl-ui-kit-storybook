import clsx from 'clsx';
import { type ComponentProps } from 'react';

export const TextArea = ({ className, ...props }: ComponentProps<'textarea'>) => (
  <textarea
    className={clsx(
      'w-full rounded border border-slate-300 p-2 text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
      className,
    )}
    {...props}
  />
);
