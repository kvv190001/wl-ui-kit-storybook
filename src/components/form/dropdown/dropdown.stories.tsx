import type { Meta, StoryObj } from '@storybook/react-vite';

import { Dropdown } from './dropdown';
import { ImageIcon } from 'lucide-react';

const DEFAULT_OPTIONS = [
  { label: 'Option 1', icon: <ImageIcon className="w-4 h-4 text-slate-500" /> },
  { label: 'Option 2', icon: <ImageIcon className="w-4 h-4 text-slate-500" /> },
  { label: 'Option 3', icon: <ImageIcon className="w-4 h-4 text-slate-500" /> },
  { label: 'Option 4', icon: <ImageIcon className="w-4 h-4 text-slate-500" /> },
];

const meta: Meta<typeof Dropdown> = {
  title: 'React Components/Form/Dropdown',
  component: Dropdown,
  args: {
    placeholder: 'Placeholder text',
    variant: 'outline',
    size: 'medium',
    disabled: false,
    options: DEFAULT_OPTIONS,
  },
  argTypes: {
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Text displayed when no option is selected',
    },
    variant: {
      name: 'Variant',
      description: 'Dropdown style variant',
      control: 'select',
      options: ['outline', 'transparent', 'lightBg', 'darkBg'],
      table: {
        defaultValue: {
          summary: 'outline',
        },
      },
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the dropdown',
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    options: {
      name: 'Options',
      control: false,
      description: 'List of selectable items',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the dropdown trigger',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
  },
};

export const LightBg: Story = {
  args: {
    variant: 'lightBg',
  },
};

export const DarkBg: Story = {
  args: {
    variant: 'darkBg',
  },
};
