import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AutoComplete } from '@/components/molecules';

describe('AutoComplete', () => {
    it('loaded', () => {
        render(<AutoComplete />);
        expect(true).toBeTruthy();
    });

    it('change search text', () => {
        render(<AutoComplete />);
        const input = screen.getByTestId('input-auto-complete') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'the godfather' } });
        expect(input.value).toBe('the godfather');
    });

    it('search keyword', () => {
        render(<AutoComplete />);
        const input = screen.getByTestId('input-auto-complete') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'the godfather' } });
        let options = screen.getByTestId('search-option-list');
        expect(options.children.length).toBe(2);
        fireEvent.change(input, { target: { value: 'Star Wars' } });
        options = screen.getByTestId('search-option-list');
        expect(options.children.length).toBe(3);
    });
});
