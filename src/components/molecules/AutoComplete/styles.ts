import styled from '@emotion/styled';

export const Container = styled.figure`
    position: relative;
    margin: 0;
`;

export const OptionListContainer = styled.ul`
    position: absolute;
    overflow: auto;
    z-index: 2;
    max-height: 300px;
    border: 1px solid;
    list-style: none;
    padding-left: 0;
`;

export const Option = styled.li`
    padding: 5px;

    &:hover {
        background-color: #eee;
    }
`;
