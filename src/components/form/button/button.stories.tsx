import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'React Components/Form/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'text',
      description: 'Text to display on the button',
      table: {
        disable: true,
      },
    },
    variant: {
      name: 'Variant',
      description: 'Variant of the button',
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'shadow'],
      table: {
        defaultValue: {
            summary: 'primary',
        },
      },
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large'],
      description: 'Size of the button',
      table: {
        defaultValue: {
            summary: 'medium',
        },
      },
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the button',
      table: {
        defaultValue: {
            summary: false,
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args:{
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args:{
        variant: 'secondary',
    },
};

export const Outline: Story = {
    args:{
        variant: 'outline',
    },
};

export const Shadow: Story = {
    args:{
        variant: 'shadow',
    },
};
