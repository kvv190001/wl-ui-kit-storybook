import clsx from 'clsx';

type ProgressProps = {
  value?: number;
  max?: number;
  className?: string;
};

export const Progress = ({ value = 0, max = 100, className }: ProgressProps) => {
  const percent = Math.min(100, (value / max) * 100);
  return (
    <div className={clsx('w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2', className)}>
      <div
        className="h-2 bg-blue-600 dark:bg-blue-400 rounded-full transition-all"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};

export const Skeleton = ({ className }: { className?: string }) => (
  <div className={clsx('animate-pulse bg-slate-200 dark:bg-slate-700 rounded', className)} />
);
