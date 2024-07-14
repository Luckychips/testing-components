import { useState } from 'react';
import { FormInput } from '@/components/atoms';
import * as S from './styles';

interface OptionItem {
    label: string;
    value: string;
}

const AutoComplete = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <S.Container>
            <FormInput
                name="input-auto-complete"
                value={searchText}
                setValue={(v: string) => setSearchText(v)}
            />
        </S.Container>
    );
};

export default AutoComplete;
