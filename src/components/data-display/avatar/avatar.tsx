import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { type ComponentProps } from 'react';

export const avatarVariants = cva(
  ['inline-flex', 'items-center', 'justify-center', 'overflow-hidden', 'bg-slate-200', 'text-slate-600', 'dark:bg-slate-700', 'dark:text-slate-300'],
  {
    variants: {
      size: {
        small: ['w-8', 'h-8', 'text-xs', 'rounded-full'],
        medium: ['w-12', 'h-12', 'text-sm', 'rounded-full'],
        large: ['w-16', 'h-16', 'text-base', 'rounded-full'],
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
);

type AvatarVariants = VariantProps<typeof avatarVariants>;
type AvatarProps = ComponentProps<'div'> & AvatarVariants & { src?: string; alt?: string };

export const Avatar = ({ src, alt, size, className }: AvatarProps) => {
  return src ? (
    <img src={src} alt={alt} className={clsx(avatarVariants({ size, className }), 'object-cover')} />
  ) : (
    <div className={clsx(avatarVariants({ size, className }))}>{alt?.[0] ?? '?'}</div>
  );
};
