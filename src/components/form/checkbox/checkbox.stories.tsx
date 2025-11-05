import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  args: { disabled: false },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
