import { cva, type VariantProps } from 'class-variance-authority';
import { type ComponentProps } from 'react';
import clsx from 'clsx';

export const variants = cva(
    [
        'inline-flex',
        'items-center',
        'cursor-pointer',
        'transition-colors',
    ],
    {
        variants: {
            labelPosition: {
                none: [],
                right: ['flex-row', 'gap-2'],
                bottom: ['flex-col', 'gap-1.5'],
            },
            size: {
                small: [],
                medium: [],
                large: [],
            },
        },
        defaultVariants: {
            labelPosition: 'right',
            size: 'medium',
        },
    },
);

const radioInputVariants = cva(
    [
        'appearance-none',
        'rounded-full',
        'border',
        'border-black',
        'bg-white',
        'cursor-pointer',
        'disabled:border-stone-300',
        'disabled:cursor-not-allowed',
        'disabled:checked:before:bg-stone-300',
        'disabled:hover:border-stone-300',
        'disabled:active:border-stone-300',
        'hover:border-neutral-700',
        'active:border-neutral-600',
        'checked:border-rose-600',
        'checked:hover:border-red-600',
        'checked:active:border-red-400',
        'relative',
        'before:content-[""]',
        'before:absolute',
        'before:top-1/2',
        'before:left-1/2',
        'before:-translate-x-1/2',
        'before:-translate-y-1/2',
        'before:rounded-full',
        'before:bg-rose-600',
        'before:scale-0',
        'checked:before:scale-100',
        'hover:before:bg-red-600',
        'active:before:bg-red-400',
    ],
    {
        variants: {
            size: {
                small: ['w-3.5', 'h-3.5', 'before:w-2', 'before:h-2'],
                medium: ['w-4', 'h-4', 'before:w-2.5', 'before:h-2.5'],
                large: ['w-5', 'h-5', 'before:w-3', 'before:h-3'],
            },
        },
        defaultVariants: {
            size: 'medium',
        },
    },
);

const labelTextVariants = cva(
    [
        'select-none',
        'text-slate-900',
    ],
    {
        variants: {
            size: {
                small: ['text-xs'],
                medium: ['text-sm'],
                large: ['text-base'],
            },
        },
        defaultVariants: {
            size: 'medium',
        },
    },
);

type RadioButtonVariants = VariantProps<typeof variants> & VariantProps<typeof radioInputVariants>;

type RadioButtonProps = Omit<ComponentProps<'input'>, 'type' | 'size'> &
    RadioButtonVariants & {
        label?: string;
    };

export const RadioButton = ({
    labelPosition,
    size,
    label,
    className,
    ...props
}: RadioButtonProps) => {
    return (
        <label className={clsx(variants({ labelPosition, size }), className)}>
            <input
                type="radio"
                className={radioInputVariants({ size })}
                {...props}
            />
            {label && labelPosition !== 'none' && (
                <span className={labelTextVariants({ size })}>
                    {label}
                </span>
            )}
        </label>
    );
};