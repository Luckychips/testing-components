import styled from '@emotion/styled';

export const ListContainer = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding-left: 0 !important;
`;

export const ListItem = styled.li`
    text-align: center;
    padding: 5px;

    &.header {
        font-weight: 600;
        font-size: 0.9rem;
        margin-bottom: 10px;

        &.sunday {
            color: red;
        }

        &.saturday {
            color: blue;
        }
    }

    &.body-clickable {
        cursor: pointer;

        &:hover {
            background-color: #efefef;
        }

        &.sunday {
            color: red;
        }

        &.saturday {
            color: blue;
        }
    }
`;
