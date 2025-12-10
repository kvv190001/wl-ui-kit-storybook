import { type ComponentProps } from 'react';
import clsx from 'clsx';
import { RadioButton } from '../radio-button/radio-button';
import type { VariantProps } from 'class-variance-authority';
import { variants as radioVariants } from '../radio-button/radio-button';

type RadioVariants = VariantProps<typeof radioVariants>;

type RadioGroupProps = {
    name: string;
    options: Array<{
        value: string;
        label: string;
        disabled?: boolean;
    }>;
    defaultValue?: string;
    onChange?: (value: string) => void;
    className?: string;
    orientation?: 'vertical' | 'horizontal';
} & Pick<RadioVariants, 'labelPosition' | 'size'>;

export const RadioGroup = ({
    name,
    options,
    defaultValue,
    onChange,
    className,
    orientation = 'vertical',
    labelPosition = 'right',
    size = 'medium',
}: RadioGroupProps) => {
    return (
        <div
            className={clsx(
                'flex',
                orientation === 'vertical' ? 'flex-col gap-3' : 'flex-row gap-6',
                className
            )}
        >
            {options.map((option) => (
                <RadioButton
                    key={option.value}
                    name={name}
                    value={option.value}
                    label={option.label}
                    labelPosition={labelPosition}
                    size={size}
                    defaultChecked={option.value === defaultValue}
                    disabled={option.disabled}
                    onChange={(e) => onChange?.(e.target.value)}
                />
            ))}
        </div>
    );
};