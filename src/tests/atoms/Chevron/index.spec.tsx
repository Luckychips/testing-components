import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Chevron } from '@/components/atoms';

describe('Chevron', () => {
    it('loaded', () => {
        render(<Chevron />);
        expect(true).toBeTruthy();
    });

    describe('small', () => {
        it('right', () => {
            render(<Chevron />);
            const chevron = screen.getByTestId('component-chevron-small-right');
            expect(chevron.classList).toContain('small');
            expect(chevron.classList).toContain('right');
        });

        it('left', () => {
            render(<Chevron direction="left" />);
            const chevron = screen.getByTestId('component-chevron-small-left');
            expect(chevron.classList).toContain('small');
            expect(chevron.classList).toContain('left');
        });

        it('up', () => {
            render(<Chevron direction="up" />);
            const chevron = screen.getByTestId('component-chevron-small-up');
            expect(chevron.classList).toContain('small');
            expect(chevron.classList).toContain('up');
        });

        it('down', () => {
            render(<Chevron direction="down" />);
            const chevron = screen.getByTestId('component-chevron-small-down');
            expect(chevron.classList).toContain('small');
            expect(chevron.classList).toContain('down');
        });
    });

    describe('large', () => {
        it('right', () => {
            render(<Chevron size="large" />);
            const chevron = screen.getByTestId('component-chevron-large-right');
            expect(chevron.classList).toContain('large');
            expect(chevron.classList).toContain('right');
        });

        it('left', () => {
            render(<Chevron size="large" direction="left" />);
            const chevron = screen.getByTestId('component-chevron-large-left');
            expect(chevron.classList).toContain('large');
            expect(chevron.classList).toContain('left');
        });

        it('up', () => {
            render(<Chevron size="large" direction="up" />);
            const chevron = screen.getByTestId('component-chevron-large-up');
            expect(chevron.classList).toContain('large');
            expect(chevron.classList).toContain('up');
        });

        it('down', () => {
            render(<Chevron size="large" direction="down" />);
            const chevron = screen.getByTestId('component-chevron-large-down');
            expect(chevron.classList).toContain('large');
            expect(chevron.classList).toContain('down');
        });
    });
});
