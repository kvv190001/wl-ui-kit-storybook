import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from './breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'React Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Electronics', href: '#' },
      { label: 'Headphones' },
    ],
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;
export const Default: Story = {};
