import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from './container';

const meta: Meta<typeof Container> = {
  title: 'React Components/Layout/Container',
  component: Container,
  args: {
    size: 'md',
    children: <div className="bg-slate-200 dark:bg-slate-700 p-4 text-center rounded">Content inside container</div>,
  },
  argTypes: {
    size: {
      name: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Container width size',
      table: { defaultValue: { summary: 'md' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;
export const Default: Story = {};
