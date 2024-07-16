import type { Meta, StoryObj } from '@storybook/react';
import { SubHeader } from '@/components/atoms';

const meta = {
    title: 'Atomic Design/atoms/SubHeader',
    component: SubHeader,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        children: <span>Just One Day</span>,
    },
} satisfies Meta<typeof SubHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
