import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SimpleButton } from '@/components/atoms';

describe('Text', () => {
    it('loaded', () => {
        render(<SimpleButton onClick={() => {}}></SimpleButton>);
        expect(true).toBeTruthy();
    });

    it('clicked simple button', () => {
        const onClick = vi.fn();
        render(<SimpleButton onClick={() => onClick()}></SimpleButton>);
        const button = screen.getByTestId('component-simple-button');
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(2);
    });
});
