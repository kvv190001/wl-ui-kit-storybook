// button.stories.ts
import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Angular Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive'],
      description: 'The visual style variant of the button'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply'
    },
    onClick: {
      action: 'clicked',
      description: 'Event emitted when button is clicked'
    }
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    className: ''
  }
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    props: args,
    template: '<app-button [variant]="variant" [size]="size" [disabled]="disabled" [className]="className">Primary Button</app-button>',
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => ({
    props: args,
    template: '<app-button [variant]="variant" [size]="size" [disabled]="disabled" [className]="className">Secondary Button</app-button>',
  }),
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => ({
    props: args,
    template: '<app-button [variant]="variant" [size]="size" [disabled]="disabled" [className]="className">Destructive Button</app-button>',
  }),
};
