import { type ComponentProps } from 'react';
import clsx from 'clsx';

type RadioProps = ComponentProps<'input'> & { label: string };

export const Radio = ({ label, className, ...props }: RadioProps) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="radio" className={clsx('accent-blue-600 dark:accent-blue-400', className)} {...props} />
    <span>{label}</span>
  </label>
);
