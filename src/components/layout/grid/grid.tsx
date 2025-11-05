import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { type ComponentProps } from 'react';

export const gridVariants = cva('grid gap-4', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
    },
  },
  defaultVariants: {
    cols: 2,
  },
});

type GridVariants = VariantProps<typeof gridVariants>;
type GridProps = ComponentProps<'div'> & GridVariants;

export const Grid = ({ cols, className, ...props }: GridProps) => {
  return <div className={clsx(gridVariants({ cols, className }))} {...props} />;
};
