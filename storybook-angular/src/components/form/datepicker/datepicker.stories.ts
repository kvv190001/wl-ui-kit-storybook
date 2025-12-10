import { Meta, StoryObj } from '@storybook/angular';
import { DatepickerComponent } from './datepicker.component';

const meta: Meta<DatepickerComponent> = {
  title: 'Angular Components/Form/Datepicker',
  component: DatepickerComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `A very simple and lightweight datepicker using the native HTML \`<input type="date">\`.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<DatepickerComponent>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
