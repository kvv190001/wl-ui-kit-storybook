import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'React Components/Form/Switch',
  component: Switch,
  args: { checked: false, disabled: false },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};
