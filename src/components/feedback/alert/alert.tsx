import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { type ComponentProps } from 'react';

export const alertVariants = cva(
  [
    'rounded-md',
    'p-3',
    'border',
    'flex',
    'items-start',
    'gap-2',
    'text-sm',
    'transition-colors',
  ],
  {
    variants: {
      status: {
        success: [
          'bg-green-50',
          'text-green-800',
          'border-green-200',
          'dark:bg-green-900/20',
          'dark:text-green-300',
          'dark:border-green-800',
        ],
        error: [
          'bg-red-50',
          'text-red-800',
          'border-red-200',
          'dark:bg-red-900/20',
          'dark:text-red-300',
          'dark:border-red-800',
        ],
        info: [
          'bg-blue-50',
          'text-blue-800',
          'border-blue-200',
          'dark:bg-blue-900/20',
          'dark:text-blue-300',
          'dark:border-blue-800',
        ],
      },
    },
    defaultVariants: {
      status: 'info',
    },
  }
);

type AlertVariants = VariantProps<typeof alertVariants>;
type AlertProps = ComponentProps<'div'> & AlertVariants;

export const Alert = ({ status, className, children, ...props }: AlertProps) => (
  <div className={clsx(alertVariants({ status, className }))} {...props}>
    {children}
  </div>
);
