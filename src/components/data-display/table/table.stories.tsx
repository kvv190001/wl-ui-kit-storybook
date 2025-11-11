import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from './table';

const data = [
  { name: 'Alice', age: 25, role: 'Developer' },
  { name: 'Bob', age: 30, role: 'Designer' },
  { name: 'Charlie', age: 22, role: 'QA' },
];

const meta: Meta<typeof Table> = {
  title: 'React Components/Data Display/Table',
  component: Table,
  args: {
    data,
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'age', label: 'Age' },
      { key: 'role', label: 'Role' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Table>;
export const Default: Story = {};
