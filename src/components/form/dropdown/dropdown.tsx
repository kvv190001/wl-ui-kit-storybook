import { useState, useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';

export const dropdownVariants = cva(
  [
    'relative',
    'cursor-pointer',
    'rounded-md',
    'border',
    'flex',
    'items-center',
    'justify-between',
    'transition-all',
    'px-3',
  ],
  {
    variants: {
      variant: {
        outline: [
          'border-slate-300',
          'focus-within:border-slate-300',
          'focus-within:border-b-red-400',
          'border-b-red-400',
          'border-b-3',
        ],
        transparent: [
          'border-transparent',
          'bg-transparent',
          'border-b-red-400',
          'border-b-3',
          'rounded-b-xs',
        ],
        lightBg: [
          'bg-zinc-50',
          'border-transparent',
        ],
        darkBg: [
          'bg-gray-100',
          'border-transparent',
        ],
      },
      size: {
        small: 'h-8 text-sm',
        medium: 'h-10 text-md',
        large: 'h-12 text-lg',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'medium',
    },
  }
);

type DropdownVariants = VariantProps<typeof dropdownVariants>;

interface DropdownProps extends DropdownVariants {
  placeholder?: string;
  options: Array<{ label: string; icon?: React.ReactNode }>;
}

export const Dropdown = ({
  variant,
  size,
  placeholder = 'Select…',
  options = [],        // <-- Add default empty array
  className,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-[200px]">
      {/* Trigger */}
      <div
        ref={triggerRef}
        className={clsx(dropdownVariants({ variant, size }), className)}
        onClick={() => setOpen(!open)}
      >
        <span className={value ? 'text-slate-900' : 'text-slate-400'}>
          {value || placeholder}
        </span>
        <ChevronDown className="w-4 h-4 text-slate-500" />
      </div>

      {/* Menu */}
      {open && (
        <div className="absolute left-0 right-0 mt-1 bg-white border border-slate-200 rounded-md shadow-lg p-2 z-20">
          {options.map((opt) => (
            <div
              key={opt.label}
              className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-slate-100 cursor-pointer"
              onClick={() => {
                setValue(opt.label);
                setOpen(false);
              }}
            >
              {opt.icon}
              <span>{opt.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
