import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '@/components/molecules';

const setup = () => {
    const component = render(<Header />);
    const iconContainer = screen.getByTestId('header-icon-container');
    return {
        ...component,
        iconContainer,
    };
}

describe('Header', () => {
    it('loaded', () => {
        render(<Header />);
        expect(true).toBeTruthy();
    });

    it('default icon', () => {
        const { iconContainer } = setup();
        expect(iconContainer.children.length).toBe(0);
    });

    it('visible search icon', () => {
        const onClick = vi.fn();
        render(<Header isVisibleSearch onClickSearch={() => onClick()} />);
        const iconContainer = screen.getByTestId('header-icon-container');
        expect(iconContainer.children.length).toBe(1);
        const iconButton = iconContainer.children[0] as HTMLElement;
        fireEvent.click(iconButton);
        expect(onClick).toHaveBeenCalled();
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('visible cart icon', () => {
        const onClick = vi.fn();
        render(<Header isVisibleCart onClickCart={() => onClick()} />);
        const iconContainer = screen.getByTestId('header-icon-container');
        expect(iconContainer.children.length).toBe(1);
        const iconButton = iconContainer.children[0] as HTMLElement;
        fireEvent.click(iconButton);
        expect(onClick).toHaveBeenCalled();
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('visible icons', () => {
        const onClickSearch = vi.fn();
        const onClickCart = vi.fn();
        render(
            <Header
                isVisibleSearch
                isVisibleCart
                onClickSearch={() => onClickSearch()}
                onClickCart={() => onClickCart()}
            />,
        );
        const iconContainer = screen.getByTestId('header-icon-container');
        expect(iconContainer.children.length).toBe(2);
        const buttonSearch = iconContainer.children[0] as HTMLElement;
        const buttonCart = iconContainer.children[1] as HTMLElement;
        fireEvent.click(buttonSearch);
        fireEvent.click(buttonSearch);
        fireEvent.click(buttonCart);
        expect(onClickSearch).toHaveBeenCalled();
        expect(onClickSearch).toHaveBeenCalledTimes(2);
        expect(onClickCart).toHaveBeenCalled();
        expect(onClickCart).toHaveBeenCalledTimes(1);
    });
});
