import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { type ComponentProps } from 'react';

export const containerVariants = cva('mx-auto w-full', {
  variants: {
    size: {
      sm: 'max-w-screen-sm px-4',
      md: 'max-w-screen-md px-6',
      lg: 'max-w-screen-lg px-8',
      xl: 'max-w-screen-xl px-12',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type ContainerVariants = VariantProps<typeof containerVariants>;
type ContainerProps = ComponentProps<'div'> & ContainerVariants;

export const Container = ({ size, className, ...props }: ContainerProps) => {
  return <div className={clsx(containerVariants({ size, className }))} {...props} />;
};
