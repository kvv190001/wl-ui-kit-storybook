import type { Meta, StoryObj } from '@storybook/react-vite';
import { List, ListItem } from './list';

const meta: Meta<typeof List> = {
  title: 'React Components/Data Display/List',
  component: List,
  args: {
    children: (
      <>
        <ListItem>Item One</ListItem>
        <ListItem>Item Two</ListItem>
        <ListItem>Item Three</ListItem>
      </>
    ),
    variant: 'plain',
  },
  argTypes: {
    variant: { control: 'select', options: ['plain', 'bordered'] },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Plain: Story = {};
export const Bordered: Story = { args: { variant: 'bordered' } };
