import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Layout/Divider',
  component: Divider,
  args: {
    orientation: 'horizontal',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Divider orientation',
      table: { defaultValue: { summary: 'horizontal' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;
export const Horizontal: Story = {};
export const Vertical: Story = { args: { orientation: 'vertical' } };
