import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker } from './datepicker';

const meta: Meta<typeof DatePicker> = {
  title: 'React Components/Form/DatePicker',
  component: DatePicker,
  args: { disabled: false },
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {};
