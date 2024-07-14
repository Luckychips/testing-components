import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormInput } from '@/components/atoms';

const setup = () => {
    const fieldName = 'field-first-name';
    const component = render(<FormInput label="First Name" name={fieldName} />);
    const input = screen.getByTestId(fieldName) as HTMLInputElement;
    return {
        ...component,
        input,
    };
}

describe('FormInput', async () => {
    it('loaded', () => {
        setup();
        expect(true).toBeTruthy();
    });

    it('changed input value', () => {
        const { input } = setup();
        fireEvent.change(input, { target: { value: 'greeting' } });
        expect(input.value).toBe('greeting');
    });
});
