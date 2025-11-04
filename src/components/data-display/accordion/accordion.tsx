import { useState, type ReactNode } from 'react';

type AccordionItemProps = {
  title: string;
  children: ReactNode;
};

export const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b dark:border-slate-700">
      <button
        className="w-full text-left px-3 py-2 font-medium flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800"
        onClick={() => setOpen(!open)}
      >
        {title} <span>{open ? '−' : '+'}</span>
      </button>
      {open && <div className="p-3 text-sm text-slate-700 dark:text-slate-300">{children}</div>}
    </div>
  );
};

export const Accordion = ({ children }: { children: ReactNode }) => (
  <div className="border rounded-md dark:border-slate-700">{children}</div>
);
