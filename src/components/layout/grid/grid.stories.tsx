import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid } from './grid';

const meta: Meta<typeof Grid> = {
  title: 'React Components/Layout/Grid',
  component: Grid,
  args: {
    cols: 2,
    children: Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="bg-slate-200 dark:bg-slate-700 p-4 text-center rounded">
        Item {i + 1}
      </div>
    )),
  },
  argTypes: {
    cols: {
      name: 'Columns',
      control: 'select',
      options: [1, 2, 3, 4],
      description: 'Number of grid columns',
      table: { defaultValue: { summary: 2 } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;
export const Default: Story = {};
