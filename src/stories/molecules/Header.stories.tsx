import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/components/molecules';

const meta = {
    title: 'Atomic Design/molecules/Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
