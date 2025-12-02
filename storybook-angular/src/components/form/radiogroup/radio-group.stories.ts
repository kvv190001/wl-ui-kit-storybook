// radio-group.stories.ts
import { Meta, StoryObj } from '@storybook/angular';
import { RadioGroupComponent } from './radio-group.component';

const meta: Meta<RadioGroupComponent> = {
  title: 'Angular Components/Form/RadioGroup',
  component: RadioGroupComponent,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of radio options with value, label, and optional disabled state'
    },
    selectedValue: {
      control: 'text',
      description: 'The currently selected value'
    },
    name: {
      control: 'text',
      description: 'The name attribute for the radio group (groups radio buttons together)'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire radio group is disabled'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the radio buttons and labels'
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'The layout orientation of the radio group'
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the radio group'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the container'
    },
    valueChange: {
      action: 'valueChange',
      description: 'Event emitted when the selected value changes'
    }
  },
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ],
    selectedValue: 'option1',
    name: 'radio-group',
    disabled: false,
    size: 'medium',
    orientation: 'vertical',
    ariaLabel: 'Radio group',
    className: ''
  }
};

export default meta;
type Story = StoryObj<RadioGroupComponent>;

export const Default: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ],
    selectedValue: 'option1',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-radio-group 
        [options]="options" 
        [selectedValue]="selectedValue" 
        [name]="name" 
        [disabled]="disabled" 
        [size]="size" 
        [orientation]="orientation"
        [ariaLabel]="ariaLabel"
        [className]="className"
        (valueChange)="valueChange($event)">
      </app-radio-group>
    `,
  }),
};

export const Horizontal: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ],
    selectedValue: 'option1',
    orientation: 'horizontal',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-radio-group 
        [options]="options" 
        [selectedValue]="selectedValue" 
        [name]="name" 
        [disabled]="disabled" 
        [size]="size" 
        [orientation]="orientation"
        [ariaLabel]="ariaLabel"
        [className]="className"
        (valueChange)="valueChange($event)">
      </app-radio-group>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ],
    selectedValue: 'option2',
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-radio-group 
        [options]="options" 
        [selectedValue]="selectedValue" 
        [name]="name" 
        [disabled]="disabled" 
        [size]="size" 
        [orientation]="orientation"
        [ariaLabel]="ariaLabel"
        [className]="className"
        (valueChange)="valueChange($event)">
      </app-radio-group>
    `,
  }),
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2 (Disabled)', disabled: true },
      { value: 'option3', label: 'Option 3' }
    ],
    selectedValue: 'option1',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-radio-group 
        [options]="options" 
        [selectedValue]="selectedValue" 
        [name]="name" 
        [disabled]="disabled" 
        [size]="size" 
        [orientation]="orientation"
        [ariaLabel]="ariaLabel"
        [className]="className"
        (valueChange)="valueChange($event)">
      </app-radio-group>
    `,
  }),
};

export const Small: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Small Option 1' },
      { value: 'option2', label: 'Small Option 2' },
      { value: 'option3', label: 'Small Option 3' }
    ],
    selectedValue: 'option1',
    size: 'small',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-radio-group 
        [options]="options" 
        [selectedValue]="selectedValue" 
        [name]="name" 
        [disabled]="disabled" 
        [size]="size" 
        [orientation]="orientation"
        [ariaLabel]="ariaLabel"
        [className]="className"
        (valueChange)="valueChange($event)">
      </app-radio-group>
    `,
  }),
};

export const Large: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Large Option 1' },
      { value: 'option2', label: 'Large Option 2' },
      { value: 'option3', label: 'Large Option 3' }
    ],
    selectedValue: 'option1',
    size: 'large',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-radio-group 
        [options]="options" 
        [selectedValue]="selectedValue" 
        [name]="name" 
        [disabled]="disabled" 
        [size]="size" 
        [orientation]="orientation"
        [ariaLabel]="ariaLabel"
        [className]="className"
        (valueChange)="valueChange($event)">
      </app-radio-group>
    `,
  }),
};