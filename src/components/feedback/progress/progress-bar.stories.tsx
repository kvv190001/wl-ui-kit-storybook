import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress, Skeleton } from './progress-bar';

const meta: Meta<typeof Progress> = {
  title: 'Components/Feedback/Progress Bar',
  component: Progress,
  args: {
    value: 50,
    max: 100,
  },
  argTypes: {
    value: {
      control: 'number',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Progress>;

export const ProgressExample: Story = { args: { value: 70, } };

export const SkeletonExample: Story = {
  render: () => <Skeleton className="h-6 w-48" />,
};
