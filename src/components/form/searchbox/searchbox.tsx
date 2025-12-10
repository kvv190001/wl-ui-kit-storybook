import { cva, type VariantProps } from 'class-variance-authority';
import { type ComponentProps } from 'react';
import clsx from 'clsx';

export const variants = cva(
    [
        'border',
        'rounded',
        'inline-flex',
        'items-center',
        'gap-2',
        'px-3',
        'transition-colors',
        'focus-visible:outline',
        'focus-visible:outline-2',
        'focus-visible:outline-offset-2',
        'disabled:opacity-50',
        'disabled:cursor-not-allowed',
        'outline-none',
    ],
    {
        variants: {
            variant: {
                primary: [
                    'bg-white',
                    'border-gray-300',
                    'focus-within:border-gray-300',
                    'focus-within:border-b-red-400',
                    'focus-within:border-b-3',
                    'border-b-zinc-500',
                ],
                darkBg: [
                    'bg-gray-100',
                    'border-transparent',
                    'focus-within:border-b-red-400',
                    'focus-within:border-b-3',
                ],
                lightBg: [
                    'bg-white',
                    'border-transparent',
                    'focus-within:border-b-red-400',
                    'focus-within:border-b-3',
                ],
                transparent: [
                    'bg-transparent',
                    'border-transparent',
                    'border-b-zinc-500',
                    'focus-within:border-b-red-400',
                    'focus-within:border-b-3',
                ],
            },
            size: {
                xsmall: ['text-xs', 'h-7'],
                small: ['text-sm', 'h-8'],
                medium: ['text-md', 'h-10'],
                large: ['text-lg', 'h-12'],
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'medium',
        },
    },
);

type SearchboxVariants = VariantProps<typeof variants>;

type SearchboxProps = ComponentProps<'input'> & SearchboxVariants;

export const Searchbox = ({ variant, size, className, ...props }: SearchboxProps) => {
    return (
        <div className={clsx(variants({ variant, size, className }))}>
            <svg
                className="w-5 h-5 text-slate-500 shrink-0 -ml-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input
                className="bg-transparent outline-none flex-1 w-full"
                {...props}
            />
        </div>
    );
};
