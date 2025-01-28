import { useEffect } from 'react';
import * as S from './styles';

interface Props {
    isVisibleSearch?: boolean;
    isVisibleCart?: boolean;
    onClickSearch?: () => void;
    onClickCart?: () => void;
}

const Header = ({
    isVisibleSearch = false,
    isVisibleCart = false,
    onClickSearch,
    onClickCart,
}: Props) => {
    const add = (a: number, b: number, m: number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(a + b);
            }, m);
        });
    };

    useEffect(() => {
        (async () => {
            const a = add(10, 20, 1000);
            console.log(await a);
            const b = add(10, 20, 1000);
            console.log(await b);
        })();
    }, []);

    return (
        <S.Container>
            <S.Logo data-testid="header-logo">TODD</S.Logo>
            <S.IconContainer data-testid="header-icon-container">
                {isVisibleSearch && (
                    <S.IconSearch onClick={() => onClickSearch && onClickSearch()}>SE</S.IconSearch>
                )}
                {isVisibleCart && (
                    <S.IconCart onClick={() => onClickCart && onClickCart()}>CA</S.IconCart>
                )}
            </S.IconContainer>
        </S.Container>
    );
};

export default Header;
