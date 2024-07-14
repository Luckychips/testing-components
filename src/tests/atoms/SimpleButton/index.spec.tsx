import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SimpleButton } from '@/components/atoms';

const setup = () => {
    const onClick = vi.fn();
    const component = render(<SimpleButton onClick={() => onClick()}></SimpleButton>);
    const button = screen.getByTestId('component-simple-button');
    return {
        ...component,
        onClick,
        button,
    };
};

describe('Text', () => {
    it('loaded', () => {
        setup();
        expect(true).toBeTruthy();
    });

    it('clicked simple button', () => {
        const { onClick, button } = setup();
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(2);
    });
});
