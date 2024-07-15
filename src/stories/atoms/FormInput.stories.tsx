import type { Meta, StoryObj } from '@storybook/react';
import { FormInput } from '@/components/atoms';

let inputValue = '';

const meta = {
    title: 'Atomic Design/atoms/FormInput',
    component: FormInput,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        label: 'Field',
        name: 'name-fleld',
        value: inputValue,
        setValue: (v: string) => inputValue = v,
    },
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
