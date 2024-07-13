import * as S from './styles';

interface Props extends BaseComponent {}

const Text = ({ children }: Props) => {
    return <S.Container data-testid="basic-text-component">{children}</S.Container>;
};

export default Text;
