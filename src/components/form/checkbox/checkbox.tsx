import { type ComponentProps } from 'react';

export const Checkbox = (props: ComponentProps<'input'>) => (
  <input type="checkbox" className="h-4 w-4 accent-blue-600 dark:accent-blue-400" {...props} />
);
