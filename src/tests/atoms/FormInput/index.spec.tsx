import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormInput } from '@/components/atoms';

describe('FormInput', async () => {
    it('loaded', () => {
        render(<FormInput label="First Name" name="field-first-name" />);
        expect(true).toBeTruthy();
    });

    it('changed input value', () => {
        render(<FormInput label="First Name" name="field-first-name" />);
        const input = screen.getByTestId('field-first-name') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'greeting' } });
        expect(input.value).toBe('greeting');
    });
});
