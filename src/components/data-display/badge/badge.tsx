import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

export const badgeVariants = cva(
  ['inline-flex', 'items-center', 'rounded-full', 'px-2.5', 'py-0.5', 'text-xs', 'font-medium'],
  {
    variants: {
      variant: {
        default: ['bg-blue-100', 'text-blue-800', 'dark:bg-blue-900', 'dark:text-blue-100'],
        success: ['bg-green-100', 'text-green-800', 'dark:bg-green-900', 'dark:text-green-100'],
        warning: ['bg-yellow-100', 'text-yellow-800', 'dark:bg-yellow-900', 'dark:text-yellow-100'],
        danger: ['bg-red-100', 'text-red-800', 'dark:bg-red-900', 'dark:text-red-100'],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;

export const Badge = ({ variant, className, ...props }: BadgeProps) => (
  <span className={clsx(badgeVariants({ variant, className }))} {...props} />
);
