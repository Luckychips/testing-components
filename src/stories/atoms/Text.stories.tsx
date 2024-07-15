import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@/components/atoms';

const meta = {
    title: 'Atomic Design/atoms/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        children: 'hello world',
        dataTestId: 'say-hi',
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
