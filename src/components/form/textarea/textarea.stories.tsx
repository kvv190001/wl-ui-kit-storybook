import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './textarea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/Form/TextArea',
  component: TextArea,
  args: {
    placeholder: 'Write something...',
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};
