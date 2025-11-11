import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'React Components/Data Display/Avatar',
  component: Avatar,
  args: {
    src: '',
    alt: 'SV',
    size: 'medium',
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
export const WithImage: Story = {
  args: { src: 'https://via.placeholder.com/64', alt: 'User' },
};
