import { cva, type VariantProps } from 'class-variance-authority';
import { type ComponentProps } from 'react';
import clsx from 'clsx';

export const cardVariants = cva(
  [
    'rounded-lg',
    'border',
    'shadow-sm',
    'bg-white',
    'p-4',
    'dark:bg-slate-800',
    'dark:border-slate-700',
    'transition-shadow',
  ],
  {
    variants: {
      variant: {
        default: [],
        outlined: ['border-2', 'border-slate-300', 'dark:border-slate-600'],
        elevated: ['shadow-md'],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type CardVariants = VariantProps<typeof cardVariants>;
type CardProps = ComponentProps<'div'> & CardVariants;

export const Card = ({ variant, className, ...props }: CardProps) => {
  return <div className={clsx(cardVariants({ variant, className }))} {...props} />;
};
