import styled from '@emotion/styled';

export const Container = styled.h3`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 10px;
`;

export const Chevron = styled.span`
    &::before {
        border-style: solid;
        border-width: 1px 1px 0 0;
        content: '';
        display: inline-block;
        height: 5px;
        left: 5px;
        position: relative;
        top: 6.5px;
        color: #666;
        transform: rotate(45deg);
        vertical-align: top;
        width: 5px;
    }
`;
