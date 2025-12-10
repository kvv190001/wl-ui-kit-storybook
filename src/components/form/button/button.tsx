import { cva, type VariantProps } from 'class-variance-authority';
import { type ComponentProps } from 'react';
import clsx from 'clsx';

export const variants = cva(
    [
        'font-semibold',
        'border',
        'rounded',
        'inline-flex',
        'items-center',
        'justify-center',
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
                    'bg-rose-500',
                    'text-white',
                    'border-transparent',
                    'hover:bg-red-600',
                    'active:bg-red-400',
                    'shadow-sm'
                    // 'disabled:bg-red-200'
                    // 🌙 dark mode
                    //'dark:bg-blue-500',
                    //'dark:hover:bg-blue-400',
                    //'dark:active:bg-blue-300',
                ],
                secondary: [
                    'bg-white',
                    'text-slate-900',
                    'border-transparent',
                    'hover:bg-neutral-100',
                    'active:bg-neutral-200',
                    'shadow-sm'
                    // 'disabled:bg-zinc-100',
                    // 🌙 dark mode
                    // 'dark:bg-slate-800',
                    // 'dark:text-slate-100',
                    // 'dark:border-slate-700',
                    // 'dark:hover:bg-slate-700',
                    // 'dark:active:bg-slate-600',
                ],
                outline: [
                    'bg-white',
                    'text-slate-900',
                    'border-neutral-200',
                    'hover:bg-neutral-100',
                    'active:bg-neutral-200',
                    'shadow-sm'
                ],
                shadow: [
                    'bg-rose-500',
                    'text-white',
                    'border-transparent',
                    'hover:bg-red-600',
                    'active:bg-red-400',
                    'shadow-xl'
                ],
            },
            size: {
                xsmall: ['text-xs', 'w-17', 'h-7'],
                small: ['text-sm', 'w-20', 'h-8'],
                medium: ['text-md', 'w-25', 'h-10'],
                large: ['text-lg', 'w-33', 'h-12'],
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