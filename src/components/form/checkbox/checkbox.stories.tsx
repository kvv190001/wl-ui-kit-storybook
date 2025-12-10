import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from './checkbox';


const meta: Meta<typeof Checkbox> = {
  title: "WorldLink Components/Form/Checkbox",
  component: Checkbox,
  args: {
    label: "Label",
    variant: "square",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["square", "round"],
    },
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Round: Story = {
  args: {
    variant: "round",
    label: "Label",
  },
};
