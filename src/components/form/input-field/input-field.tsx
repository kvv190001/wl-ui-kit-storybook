import { cva, type VariantProps } from 'class-variance-authority';
import { type ComponentProps, type ReactNode } from 'react';
import clsx from 'clsx';

export const inputFieldVariants = cva(
    [
        'border',
        'rounded',
        'inline-flex',
        'items-center',
        'gap-2',
        'px-3',
        'transition-colors',
        'focus-within:outline',
        'focus-within:outline-2',
        'focus-within:outline-offset-2',
        'disabled:opacity-50',
        'disabled:cursor-not-allowed',
        'outline-none',
    ],
    {
        variants: {
            variant: {
                primary: [
                    'bg-white',
                    'border border-neutral-400',
                    'focus-within:border-black',
                    'focus-within:ring-2',
                    'focus-within:ring-red-300',
                ],

                error: [
                    'bg-zinc-50',
                    'border-red-500',
                    'focus-within:ring-2',
                    'focus-within:ring-zinc-50',
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

const labelVariants = cva('text-sm font-medium transition-colors', {
    variants: {
        variant: {
            primary: 'text-neutral-700 group-focus-within:text-black',
            error: 'text-red-500',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});


type InputFieldVariants = VariantProps<typeof inputFieldVariants>;

interface InputFieldProps extends Omit<ComponentProps<'input'>, 'children' | 'size'> {
    variant?: InputFieldVariants['variant'];
    size?: InputFieldVariants['size'];
    label?: string;
    labelPosition?: 'top' | 'bottom' | 'none';
    icon?: ReactNode;
}

const ErrorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
    </svg>
);


export const InputField = ({
    variant,
    size,
    className,
    label,
    labelPosition = 'none',
    icon,
    ...props
}: InputFieldProps) => {
    const inputContainer = (
        <div className={clsx(inputFieldVariants({ variant, size, className }))}>
            {icon && (
                <div className="flex items-center shrink-0 text-neutral-500">
                    {icon}
                </div>
            )}
            <input
                className="bg-transparent outline-none flex-1 w-full"
                {...props}
            />
        </div>
    );

    if (!label || labelPosition === 'none') {
        return inputContainer;
    }

    return (
        <div className="flex flex-col gap-1 group">
            {labelPosition === 'top' && (
                <label className={clsx(labelVariants({ variant }), "flex items-center gap-1")}>
                    {variant === "error" && <ErrorIcon />}
                    {label}
                </label>
            )}

            {inputContainer}

            {labelPosition === 'bottom' && (
                <label className={clsx(labelVariants({ variant }), "flex items-center gap-1")}>
                    {variant === "error" && <ErrorIcon />}
                    {label}
                </label>
            )}
        </div>
    );

};
