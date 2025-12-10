import type { Meta, StoryObj } from '@storybook/react-vite';

import { Searchbox } from './searchbox';

const meta: Meta<any> = {
  title: 'WorldLink Components/Form/Searchbox',
  component: Searchbox,
  args: {
    placeholder: 'Search',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
  argTypes: {
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text for the search input',
      table: {
        disable: true,
      },
    },
    variant: {
      name: 'Variant',
      description: 'Variant of the searchbox',
      control: 'select',
      options: ['primary', 'darkBg', 'lightBg', 'transparent'],
      // table default omitted to avoid strict type mismatches in Storybook typing
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large'],
      description: 'Size of the searchbox',
      // table default omitted to avoid strict type mismatches in Storybook typing
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the search input',
      // table default omitted to avoid strict type mismatches in Storybook typing
    },
  },
};

export default meta;

type Story = StoryObj<typeof Searchbox>

export const Primary: Story = {
    args: {
        variant: 'primary',
    },
};

export const DarkBg: Story = {
    args: {
        variant: 'darkBg',
    },
};

export const LightBg: Story = {
    args: {
        variant: 'lightBg',
    },
};

export const Transparent: Story = {
    args: {
        variant: 'transparent',
    }
}
