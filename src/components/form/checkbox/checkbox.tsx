import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { type ComponentProps } from "react";

export const checkboxVariants = cva(
  [
    "peer",
    "cursor-pointer",
    "appearance-none",
    "border",
    "transition-colors",
    "duration-150",
    "flex",
    "items-center",
    "justify-center",
    "focus-visible:outline",
    "focus-visible:outline-2",
    "focus-visible:outline-offset-2",

    // Disabled base
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        square: [
          "rounded-sm",
          "border-black",
          "w-5 h-5",

          // States
          "active:border-red-400",
          "disabled:border-gray-400",

          // Checked states
          "checked:bg-rose-600",
          "checked:border-red-600",
          "checked:hover:bg-red-600",
          "checked:active:bg-red-400",
        ],

        round: [
          "rounded-full",
          "border-black",
          "w-5 h-5",

          // States
          "active:border-red-400",
          "disabled:border-gray-400",

          // Checked states
          "checked:bg-rose-600",
          "checked:border-red-600",
          "checked:hover:bg-red-600",
          "checked:active:bg-red-400",
        ],
      },
    },
    defaultVariants: {
      variant: "square",
    },
  }
);

type CheckboxVariants = VariantProps<typeof checkboxVariants>;

type CheckboxProps = ComponentProps<"input"> &
  CheckboxVariants & {
    label?: string;
  };

export const Checkbox = ({ variant, className, label, ...props }: CheckboxProps) => {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none relative">
      
      {/* Checkbox */}
      <input
        type="checkbox"
        className={clsx(
          checkboxVariants({ variant }),
          "relative peer"
        )}
        {...props}
      />

      {/* Checkmark */}
      <svg
        className={clsx(
          "pointer-events-none absolute w-3.5 h-3.5 text-white transition-opacity duration-150",
          "opacity-0 peer-checked:opacity-100" // show only when checked
        )}
        style={{ left: "3px", top: "3px" }} // centers inside 20px checkbox
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="4 11 8 15 16 6" />
      </svg>

      {/* Label text */}
      {label && (
        <span className="text-sm font-medium text-black peer-checked:text-neutral-700 peer-active:text-neutral-500 peer-disabled:text-gray-400">
          {label}
        </span>
      )}
    </label>
  );
};

