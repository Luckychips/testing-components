import styled from '@emotion/styled';

export const Container = styled.i`
    &::before {
        position: relative;
        display: inline-block;
        content: '';
        border-style: solid;
        color: #666;
    }

    &.small {
        &::before {
            border-width: 1px 1px 0 0;
            width: 5px;
            height: 5px;
        }

        &.up {
            &::before {
                left: 8px;
                transform: rotate(-45deg);
            }
        }

        &.down {
            &::before {
                top: -3px;
                left: 8px;
                transform: rotate(135deg);
            }
        }

        &.left {
            &::before {
                top: -2.5px;
                left: 9px;
                transform: rotate(-135deg);
            }
        }

        &.right {
            &::before {
                top: -2px;
                left: 5px;
                transform: rotate(45deg);
            }
        }
    }

    &.large {
        &::before {
            border-width: 3px 3px 0 0;
            width: 9px;
            height: 9px;
        }

        &.up {
            &::before {
                top: 2px;
                left: 8px;
                transform: rotate(-45deg);
            }
        }

        &.down {
            &::before {
                top: -3px;
                left: 8px;
                transform: rotate(135deg);
            }
        }

        &.left {
            &::before {
                top: 0;
                left: 9px;
                transform: rotate(-135deg);
            }
        }

        &.right {
            &::before {
                top: 0;
                left: 5px;
                transform: rotate(45deg);
            }
        }
    }
`;
