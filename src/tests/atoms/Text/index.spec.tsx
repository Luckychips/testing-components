import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Text } from '@/components/atoms';

describe('Text', () => {
    it('loaded', () => {
        render(<Text></Text>);
        expect(true).toBeTruthy();
    });

    it('updated text', () => {
        render(<Text>greeting</Text>);
        const text = screen.getByTestId('basic-text-component');
        expect(text.textContent).toContain('greeting');
    });
});
