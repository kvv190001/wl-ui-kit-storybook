import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionItem } from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Data Display/Accordion',
  component: Accordion,
  args: {
    children: (
      <>
        <AccordionItem title="Section 1">Content for section 1</AccordionItem>
        <AccordionItem title="Section 2">Content for section 2</AccordionItem>
        <AccordionItem title="Section 3">Content for section 3</AccordionItem>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;
export const Default: Story = {};
