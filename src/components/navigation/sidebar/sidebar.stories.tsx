import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sidebar } from './sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
  args: {
    width: 'md',
    position: 'left',
    children: (
      <div className="p-4 space-y-2">
        <a href="#" className="block hover:underline">Dashboard</a>
        <a href="#" className="block hover:underline">Settings</a>
        <a href="#" className="block hover:underline">Profile</a>
        <a href="#" className="block hover:underline">Logout</a>
      </div>
    ),
  },
  argTypes: {
    width: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Width of the sidebar',
    },
    position: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the sidebar',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;
export const Default: Story = {};
