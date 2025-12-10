import { useState } from 'react';
import clsx from 'clsx';

type SwitchProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
};

export const Switch = ({ checked, onChange, disabled }: SwitchProps) => {
  const [isOn, setIsOn] = useState(checked ?? false);
  const toggle = () => {
    if (disabled) return;
    const next = !isOn;
    setIsOn(next);
    onChange?.(next);
  };

  return (
    <button
      onClick={toggle}
      disabled={disabled}
      className={clsx(
        'relative w-10 h-6 rounded-full transition-colors',
        isOn
          ? 'bg-blue-600 dark:bg-blue-400'
          : 'bg-slate-300 dark:bg-slate-700',
        'disabled:opacity-50 disabled:cursor-not-allowed',
      )}
    >
      <span
        className={clsx(
          'absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform',
          isOn && 'translate-x-4.5',
        )}
      />
    </button>
  );
};
