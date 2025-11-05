import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from './stack';

const meta: Meta<typeof Stack> = {
  title: 'Components/Layout/Stack',
  component: Stack,
  args: {
    direction: 'vertical',
    align: 'start',
    justify: 'start',
    children: [
      <div key="1" className="bg-slate-200 dark:bg-slate-700 p-4 rounded">Item 1</div>,
      <div key="2" className="bg-slate-200 dark:bg-slate-700 p-4 rounded">Item 2</div>,
      <div key="3" className="bg-slate-200 dark:bg-slate-700 p-4 rounded">Item 3</div>,
    ],
  },
  argTypes: {
    direction: { control: 'select', options: ['vertical', 'horizontal'], description: 'Layout direction' },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch'], description: 'Align items' },
    justify: { control: 'select', options: ['start', 'center', 'between', 'around', 'end'], description: 'Justify content' },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;
export const Default: Story = {};
