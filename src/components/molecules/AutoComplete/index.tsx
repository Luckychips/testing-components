import { FormInput } from '@/components/atoms';
import * as S from './styles';

interface OptionItem {
    label: string;
    value: string;
}

const AutoComplete = () => {
    return (
        <S.Container>
            <FormInput />
        </S.Container>
    );
};

export default AutoComplete;
