import styled from '@emotion/styled';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;

export const Logo = styled.h2`
    margin: 0;
`;

export const IconContainer = styled.nav`
    display: flex;
    align-items: center;
`;

export const IconBase = styled.h5`
    padding: 5px;

    &:hover {
        cursor: pointer;
    }
`;

export const IconSearch = styled(IconBase)``;

export const IconCart = styled(IconBase)``;
