import { useEffect, useState } from 'react';
import * as S from './styles';

interface Props {
    label?: string;
    name: string;
    value: string;
    setValue: (value: string) => void;
}

const FormInput = ({ label, name, value, setValue }: Props) => {
    const [hasFocus, setHasFocus] = useState(false);

    useEffect(() => {
        if (!hasFocus) {
            setValue('');
        }
    }, [hasFocus]);

    return (
        <S.Container>
            {label && (
                <S.PlaceholderLabel htmlFor={name} className={hasFocus ? 'focused-input' : ''}>
                    {label}
                </S.PlaceholderLabel>
            )}
            <S.TextInput
                data-testid={name}
                name={name}
                id={name}
                value={value}
                onFocus={() => setHasFocus(true)}
                onBlur={() => setHasFocus(false)}
                onChange={(e) => setValue(e.target.value)}
            />
        </S.Container>
    );
};

export default FormInput;
