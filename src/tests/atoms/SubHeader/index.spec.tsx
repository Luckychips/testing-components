import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SubHeader } from '@/components/atoms';

const setup = () => {
    const onClick = vi.fn();
    const component = render(
        <SubHeader onClick={() => onClick()}>
            <span>greeting</span>
        </SubHeader>
    );
    const header = screen.getByTestId('component-sub-header');
    return {
        ...component,
        onClick,
        header,
    };
};

describe('SubHeader', () => {
    it('loaded', () => {
        setup();
        expect(true).toBeTruthy();
    });

    it('updated text', () => {
        const { header } = setup();
        const text = header.children[0] as HTMLElement;
        expect(text.textContent).toBe('greeting');
    });
});
