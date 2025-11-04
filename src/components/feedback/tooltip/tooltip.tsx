import { useState, type ReactNode } from 'react';
import clsx from 'clsx';

type TooltipProps = {
  text: string;
  children: ReactNode;
  className?: string;
};

export const Tooltip = ({ text, children, className }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={clsx(
            'absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-slate-800 text-white text-xs whitespace-nowrap z-10',
            'dark:bg-slate-700',
            className
          )}
        >
          {text}
        </div>
      )}
    </div>
  );
};
