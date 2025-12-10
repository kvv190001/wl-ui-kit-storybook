import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './card';

const meta: Meta<typeof Card> = {
  title: 'React Components/Data Display/Card',
  component: Card,
  args: {
    children: 'This is a card content area.',
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
export const Outlined: Story = { args: { variant: 'outlined' } };
export const Elevated: Story = { args: { variant: 'elevated' } };
