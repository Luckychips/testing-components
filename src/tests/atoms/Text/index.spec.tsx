import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Text } from '@/components/atoms';

const setup = () => {
    const dataTestId = 'vitest-test-text';
    const component = render(<Text dataTestId={dataTestId}>greeting</Text>);
    const text = screen.getByTestId(dataTestId);
    return {
        ...component,
        text,
    };
};

describe('Text', () => {
    it('loaded', () => {
        setup();
        expect(true).toBeTruthy();
    });

    it('updated text', () => {
        const { text } = setup();
        expect(text.textContent).toContain('greeting');
    });
});
