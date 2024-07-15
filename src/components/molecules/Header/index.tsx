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
    return (
        <S.Container>
            <S.Logo data-testid="header-logo">Logo</S.Logo>
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
