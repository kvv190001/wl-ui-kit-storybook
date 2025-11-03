import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './radio-group';

const meta: Meta<typeof Radio> = {
  title: 'Components/Form/RadioGroup',
  component: Radio,
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Radio name="group" label="Option 1" />
      <Radio name="group" label="Option 2" />
      <Radio name="group" label="Option 3" />
    </div>
  ),
};
