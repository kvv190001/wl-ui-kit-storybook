import { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Angular Components/Form/Input',
  component: InputComponent,
  tags: ['autodocs'],

  // 👇 Add this block
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'error'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'search'],
    },
  },
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text…',
    disabled: false,
    variant: 'default',
    size: 'medium',
    type: 'text',
  },
};
