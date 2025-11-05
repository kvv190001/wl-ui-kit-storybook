import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Modal } from './modal';
import { Button } from '../../form/button/button';

const DemoModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Modal Title">
        <p>This is a modal body.</p>
      </Modal>
    </>
  );
};

const meta: Meta<typeof DemoModal> = {
  title: 'Components/Feedback/Modal',
  component: DemoModal,
};
export default meta;
type Story = StoryObj<typeof DemoModal>;

export const Default: Story = {};
