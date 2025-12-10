import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { type ComponentProps } from 'react';

export const stackVariants = cva('flex', {
  variants: {
    direction: {
      vertical: 'flex-col space-y-4',
      horizontal: 'flex-row space-x-4',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      end: 'justify-end',
    },
  },
  defaultVariants: {
    direction: 'vertical',
    align: 'start',
    justify: 'start',
  },
});

type StackVariants = VariantProps<typeof stackVariants>;
type StackProps = ComponentProps<'div'> & StackVariants;

export const Stack = ({ direction, align, justify, className, ...props }: StackProps) => {
  return <div className={clsx(stackVariants({ direction, align, justify, className }))} {...props} />;
};
