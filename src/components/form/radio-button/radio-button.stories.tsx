import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioButton } from './radio-button';

const meta: Meta<typeof RadioButton> = {
    title: 'WorldLink Components/Form/RadioButton',
    component: RadioButton,
    args: {
        label: 'Option',
        labelPosition: 'right',
        size: 'medium',
        disabled: false,
        name: 'demo-radio',
    },
    argTypes: {
        label: {
            name: 'Label',
            control: 'text',
            description: 'Text to display next to the radio button',
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
            description: 'Size of the radio button',
            table: {
                defaultValue: {
                    summary: 'medium',
                },
            },
        },
        disabled: {
            name: 'Disabled',
            control: 'boolean',
            description: 'Disables the radio button',
            table: {
                defaultValue: {
                    summary: false,
                },
            },
        },
        name: {
            name: 'Name',
            control: 'text',
            description: 'Name attribute for the radio button group',
        },
    },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const NoLabel: Story = {
    args: {
        labelPosition: 'none',
    },
};

export const LabelRight: Story = {
    args: {
        labelPosition: 'right',
    },
};

export const LabelBottom: Story = {
    args: {
        labelPosition: 'bottom',
    },
};