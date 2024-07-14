import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormInput } from '@/components/atoms';

describe('FormInput', async () => {
    it('loaded', () => {
        let value = '';
        const fieldName = 'field-first-name';
        render(
            <FormInput
                label="First Name"
                name={fieldName}
                value={value}
                setValue={(v: string) => (value = v)}
            />,
        );
        expect(true).toBeTruthy();
    });

    it('changed input value', () => {
        let value = '';
        const fieldName = 'field-first-name';
        render(
            <FormInput
                label="First Name"
                name={fieldName}
                value={value}
                setValue={(v: string) => (value = v)}
            />,
        );
        const input = screen.getByTestId(fieldName) as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'greeting' } });
        expect(value).toBe('greeting');
    });

    it('focus & blur input', () => {
        let value = '';
        const fieldName = 'field-first-name';
        render(
            <FormInput
                label="First Name"
                name={fieldName}
                value={value}
                setValue={(v: string) => (value = v)}
            />,
        );
        const input = screen.getByTestId(fieldName) as HTMLInputElement;
        fireEvent.focus(input);
        fireEvent.change(input, { target: { value: 'greeting' } });
        expect(value).toBe('greeting');
        fireEvent.blur(input);
        expect(value).toBe('');
    });
});
