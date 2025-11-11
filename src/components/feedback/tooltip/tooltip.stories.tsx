import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './tooltip';
import { Button } from '../../form/button/button';

const meta: Meta<typeof Tooltip> = {
  title: 'React Components/Feedback/Tooltip',
  component: Tooltip,
  args: {
    text: 'Tooltip text',
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
};
