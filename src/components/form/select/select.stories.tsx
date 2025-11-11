import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './select';

const meta: Meta<typeof Select> = {
  title: 'React Components/Form/Select',
  component: Select,
  args: {
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="">Select an option</option>
      <option>Option A</option>
      <option>Option B</option>
      <option>Option C</option>
    </Select>
  ),
};
