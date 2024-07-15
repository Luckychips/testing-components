import type { Meta, StoryObj } from '@storybook/react';
import { AutoComplete } from '@/components/molecules';

const meta = {
    title: 'Atomic Design/molecules/AutoComplete',
    component: AutoComplete,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
