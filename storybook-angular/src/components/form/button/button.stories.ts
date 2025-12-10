import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Angular Components/Form/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  // Standalone components must go in imports
  decorators: [
    (storyFunc) => ({
      moduleMetadata: {
        imports: [ButtonComponent],
      },
      template: storyFunc().template,
      props: storyFunc().props,
    }),
  ],
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<app-button [variant]="variant" [size]="size" [disabled]="disabled">Button</app-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<app-button [variant]="variant" [size]="size" [disabled]="disabled">Button</app-button>`,
  }),
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'medium',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<app-button [variant]="variant" [size]="size" [disabled]="disabled">Button</app-button>`,
  }),
};


