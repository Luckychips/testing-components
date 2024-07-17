import type { Meta, StoryObj } from '@storybook/react';
import { Chevron } from '@/components/atoms';

const meta = {
    title: 'Atomic Design/atoms/Chevron',
    component: Chevron,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Chevron>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
