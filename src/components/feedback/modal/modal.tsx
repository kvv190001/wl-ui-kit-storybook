import { type ReactNode } from 'react';
import clsx from 'clsx';

type ModalProps = {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children?: ReactNode;
  className?: string;
};

export const Modal = ({ open, onClose, title, children, className }: ModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={clsx(
          'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-lg shadow-lg max-w-sm w-full p-4',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
        {children}
      </div>
    </div>
  );
};
