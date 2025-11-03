import { cva, type VariantProps } from 'class-variance-authority';
import { type ComponentProps } from 'react';
import clsx from 'clsx';

export const inputVariants = cva(
  [
    'w-full',
    'rounded',
    'border',
    'shadow-sm',
    'text-sm',
    'transition-colors',
    'placeholder:text-slate-400',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-blue-500',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-white',
          'border-slate-300',
          'text-slate-900',
          'dark:bg-slate-800',
          'dark:border-slate-700',
          'dark:text-slate-100',
        ],
        error: ['border-red-500', 'text-red-600', 'dark:border-red-400'],
      },
      size: {
        small: ['px-2', 'py-1'],
        medium: ['px-3', 'py-1.5'],
        large: ['px-4', 'py-2'],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  },
);

type InputVariants = VariantProps<typeof inputVariants>;
type InputProps = ComponentProps<'input'> & InputVariants;

export const Input = ({ variant, size, className, ...props }: InputProps) => (
  <input className={clsx(inputVariants({ variant, size }), className)} {...props} />
);
