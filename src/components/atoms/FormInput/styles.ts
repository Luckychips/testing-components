import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    position: relative;
`;

export const PlaceholderLabel = styled.label`
    background-color: white;
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    padding: 0;

    transition:
        top 0.2s ease,
        font-size 0.2s ease,
        padding 0.2s ease;

    &.focused-input {
        top: 2px;
        font-size: 14px;
        padding: 0 5px;
    }
`;

export const TextInput = styled.input`
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;

    &:hover {
        border-color: #333;
    }
`;
