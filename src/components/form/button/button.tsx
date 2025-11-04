import { cva, type VariantProps } from 'class-variance-authority';
import { type ComponentProps } from 'react';
import clsx from 'clsx';

export const variants = cva(
    [
        'font-semibold',
        'border',
        'rounded',
        'shadow-sm',
        'inline-flex',
        'items-center',
        'cursor-pointer',
        'gap-1.5',
        'focus-visible:outline',
        'focus-visible:outline-2',
        'focus-visible:outline-offset-2',
        'transition-colors',
        'disabled:opacity-50',
        'disabled:cursor-not-allowed',
        'disabled:pointer-events-none',
    ],
    {
        variants: {
            variant: {
                primary: [
                    'bg-blue-600',
                    'text-white',
                    'border-transparent',
                    'hover:bg-blue-500',
                    'active:bg-blue-400',
                    // 🌙 dark mode
                    'dark:bg-blue-500',
                    'dark:hover:bg-blue-400',
                    'dark:active:bg-blue-300',
                ],
                secondary: [
                    'bg-white',
                    'text-slate-900',
                    'border-slate-300',
                    'hover:bg-slate-50',
                    'active:bg-slate-100',
                    // 🌙 dark mode
                    'dark:bg-slate-800',
                    'dark:text-slate-100',
                    'dark:border-slate-700',
                    'dark:hover:bg-slate-700',
                    'dark:active:bg-slate-600',
                ],
                destructive: [
                    'bg-red-600',
                    'text-white',
                    'border-transparent',
                    'hover:bg-red-500',
                    'active:bg-red-400',
                    // 🌙 dark mode
                    'dark:bg-red-500',
                    'dark:hover:bg-red-400',
                    'dark:active:bg-red-300',
                ],
            },
            size: {
                small: ['text-sm', 'px-2', 'py-1'],
                medium: ['text-sm', 'px-2.5', 'py-1.5'],
                large: ['text-sm', 'px-3', 'py-2'],
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'medium',
        },
    },
);

type ButtonVariants = VariantProps<typeof variants>;

type ButtonProps = ComponentProps<'button'> & ButtonVariants;

export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
    return <button className={clsx(variants({ variant, size, className }))} {...props} />;
};