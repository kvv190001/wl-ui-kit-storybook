import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'React Components/Data Display/Tabs',
  component: Tabs,
  args: {
    variant: 'underline',
    items: [
      { label: 'Overview', content: 'This is the Overview tab content.' },
      { label: 'Details', content: 'Here are more detailed contents.' },
      { label: 'Settings', content: 'Adjust your preferences here.' },
    ],
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'pill'],
      description: 'Style of tab navigation',
      table: { defaultValue: { summary: 'underline' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Underline: Story = {};
export const Pill: Story = {
  args: { variant: 'pill' },
};
