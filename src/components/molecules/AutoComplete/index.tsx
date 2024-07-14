import { useEffect, useState } from 'react';
import { FormInput } from '@/components/atoms';
import data from '@/assets/data.json';
import * as S from './styles';

interface OptionItem {
    label: string;
    value: string;
}

const AutoComplete = () => {
    const [searchText, setSearchText] = useState('');
    const [optionList, setOptionList] = useState<OptionItem[]>([]);

    useEffect(() => {
        const filtered = data.filter((item: OptionItem) =>
            item.label.toLowerCase().includes(searchText.toLowerCase()),
        );
        setOptionList(filtered);
    }, [searchText]);

    useEffect(() => {
        setOptionList(data);

        return () => {
            setSearchText('');
            setOptionList([]);
        };
    }, []);

    return (
        <S.Container>
            <FormInput
                name="input-auto-complete"
                value={searchText}
                setValue={(v: string) => setSearchText(v)}
            />
            {optionList.length > 0 && searchText && (
                <S.OptionListContainer>
                    {optionList.map((option) => (
                        <S.Option
                            key={`option-item-${option.value}`}
                            onClick={() => setSearchText(option.label)}
                        >
                            {option.label}
                        </S.Option>
                    ))}
                </S.OptionListContainer>
            )}
        </S.Container>
    );
};

export default AutoComplete;
