import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputField } from './input-field';

const meta: Meta<any> = {
    title: 'WorldLink Components/Form/InputField',
    component: InputField,
    args: {
        placeholder: 'Enter text',
        variant: 'primary',
        size: 'medium',
        disabled: false,
        label: 'Label',
        labelPosition: 'top',
    },
    argTypes: {
        placeholder: {
            name: 'Placeholder',
            control: 'text',
            description: 'Placeholder text for the input',
            table: {
                disable: true,
            },
        },
        variant: {
            name: 'Variant',
            description: 'Variant of the input field',
            control: 'select',
            options: ['primary', 'error'],
        },
        size: {
            name: 'Size',
            control: 'select',
            options: ['xsmall', 'small', 'medium', 'large'],
            description: 'Size of the input field',
        },
        disabled: {
            name: 'Disabled',
            control: 'boolean',
            description: 'Disables the input',
        },
        label: {
            name: 'Label',
            control: 'text',
            description: 'Label text for the input field',
        },
        labelPosition: {
            name: 'Label Position',
            control: 'select',
            options: ['top', 'bottom', 'none'],
            description: 'Position of the label relative to the input',
        },
    },
};

export default meta;

type Story = StoryObj<typeof InputField>

export const Default: Story = {
    args: {
        variant: 'primary',
        label: 'Username',
        labelPosition: 'none',
    },
};

export const WithIcon: Story = {
    args: {
        variant: 'primary',
        label: 'Search',
        labelPosition: 'top',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
        ),
    },
};

export const LabelBottom: Story = {
    args: {
        variant: 'primary',
        label: 'Email',
        labelPosition: 'bottom',
    },
};

export const LabelTop: Story = {
    args: {
        variant: 'primary',
        label: 'Email',
        labelPosition: 'top',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        label: 'Email',
        labelPosition: 'bottom',
    },
};
