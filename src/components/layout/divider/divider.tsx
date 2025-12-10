import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { type ComponentProps } from 'react';

export const dividerVariants = cva('border-slate-200 dark:border-slate-700', {
  variants: {
    orientation: {
      horizontal: 'w-full border-t my-4',
      vertical: 'h-full border-l mx-4',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

type DividerVariants = VariantProps<typeof dividerVariants>;
type DividerProps = ComponentProps<'div'> & DividerVariants;

export const Divider = ({ orientation, className, ...props }: DividerProps) => {
  return <div className={clsx(dividerVariants({ orientation, className }))} {...props} />;
};
