import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Feedback/Alert',
  component: Alert,
  args: {
    children: 'This is an alert message.',
    status: 'info',
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'error', 'info'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = { args: { status: 'info' } };
export const Success: Story = { args: { status: 'success' } };
export const Error: Story = { args: { status: 'error' } };
