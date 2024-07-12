import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Text } from '@/components/atoms';

describe('Text', () => {
    it('loaded', () => {
        render(<Text title="greeting" />);
        expect(true).toBeTruthy();
    });

    it('updated text', () => {
        render(<Text title="greeting" />);
        const text = screen.getByTestId('basic-text-component');
        expect(text.textContent).toContain('greeting');
    });
});
