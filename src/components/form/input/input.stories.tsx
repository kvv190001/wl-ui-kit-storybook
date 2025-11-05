import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  args: {
    placeholder: 'Enter text...',
    disabled: false,
    variant: 'default',
    size: 'medium',
    type: 'text',
  },
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'search'] },
    variant: { control: 'select', options: ['default', 'error'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const Password: Story = { args: { type: 'password', placeholder: '••••••' } };
export const Search: Story = { args: { type: 'search', placeholder: 'Search...' } };

