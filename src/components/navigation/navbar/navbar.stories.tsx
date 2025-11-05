import type { Meta, StoryObj } from '@storybook/react-vite';
import { Navbar } from './navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navigation/Navbar',
  component: Navbar,
  args: {
    position: 'static',
    children: (
      <>
        <div className="font-semibold text-lg">Brand</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </>
    ),
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['static', 'sticky', 'fixed'],
      description: 'Position of the navbar',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;
export const Default: Story = {};
