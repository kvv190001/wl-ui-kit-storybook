import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioGroup } from './radio-group';

const meta: Meta<typeof RadioGroup> = {
    title: 'React Components/Form/RadioGroup',
    component: RadioGroup,
    args: {
        name: 'demo-group',
        orientation: 'vertical',
        labelPosition: 'right',
        size: 'medium',
        options: [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ],
        defaultValue: '1',
    },
    argTypes: {
        name: {
            name: 'Name',
            control: 'text',
            description: 'Name attribute for the radio button group',
        },
        orientation: {
            name: 'Orientation',
            control: 'select',
            options: ['vertical', 'horizontal'],
            description: 'Layout orientation of the radio group',
            table: {
                defaultValue: {
                    summary: 'vertical',
                },
            },
        },
        labelPosition: {
            name: 'Label Position',
            control: 'select',
            options: ['none', 'right', 'bottom'],
            description: 'Position of the label relative to the radio button',
            table: {
                defaultValue: {
                    summary: 'right',
                },
            },
        },
        size: {
            name: 'Size',
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Size of the radio buttons',
            table: {
                defaultValue: {
                    summary: 'medium',
                },
            },
        },
        defaultValue: {
            name: 'Default Value',
            control: 'text',
            description: 'Default selected value',
        },
        options: {
            name: 'Options',
            description: 'Array of radio button options',
            table: {
                disable: true,
            },
        },
        onChange: {
            name: 'onChange',
            description: 'Callback when selection changes',
            table: {
                disable: true,
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Vertical: Story = {
    args: {
        orientation: 'vertical',
    },
};

export const Horizontal: Story = {
    args: {
        orientation: 'horizontal',
    },
};

export const LabelBottom: Story = {
    args: {
        labelPosition: 'bottom',
        orientation: 'horizontal',
        options: [
            { value: 's', label: 'Option 1' },
            { value: 'm', label: 'Option 2' },
            { value: 'l', label: 'Option 3' },
        ],
    },
};

export const SizeSelection: Story = {
    args: {
        name: 'size',
        orientation: 'horizontal',
        labelPosition: 'right',
        size: 'large',
        options: [
            { value: 'xs', label: 'Extra Small' },
            { value: 's', label: 'Small' },
            { value: 'm', label: 'Medium' },
            { value: 'l', label: 'Large' },
            { value: 'xl', label: 'Extra Large' },
        ],
        defaultValue: 'm',
    },
};