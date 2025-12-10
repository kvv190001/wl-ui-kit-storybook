import { useState, type ReactNode } from 'react';
import clsx from 'clsx';

export type TabItem = {
  label: string;
  content: ReactNode;
};

type TabsProps = {
  items: TabItem[];
  defaultIndex?: number;
  variant?: 'underline' | 'pill';
};

export const Tabs = ({ items, defaultIndex = 0, variant = 'underline' }: TabsProps) => {
  const [active, setActive] = useState(defaultIndex);

  return (
    <div className="w-full">
      {/* Tab List */}
      <div
        className={clsx('flex border-b dark:border-slate-700', {
          'gap-2 border-none': variant === 'pill',
        })}
      >
        {items.map((tab, i) => (
          <button
            key={i}
            className={clsx(
              'px-3 py-2 text-sm font-medium transition-colors',
              variant === 'underline' &&
                (active === i
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-b-2 border-transparent text-slate-600 hover:text-blue-500 dark:text-slate-300'),
              variant === 'pill' &&
                (active === i
                  ? 'bg-blue-600 text-white rounded-md dark:bg-blue-500'
                  : 'bg-transparent text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 rounded-md'),
            )}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="mt-3 text-sm text-slate-700 dark:text-slate-300">
        {items[active]?.content}
      </div>
    </div>
  );
};
