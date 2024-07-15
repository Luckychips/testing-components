import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SimpleButton } from '@/components/atoms';

const meta = {
    title: 'Atomic Design/atoms/SimpleButton',
    component: SimpleButton,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        onClick: fn(),
        children: <div>simple button text</div>,
        dataTestId: 'greeting-button',
    },
} satisfies Meta<typeof SimpleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
