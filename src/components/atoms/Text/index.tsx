import * as S from './styles';

interface Props extends BaseComponent {}

const Text = ({ dataTestId = 'basic-text-component', children }: Props) => {
    return <S.Container data-testid={dataTestId}>{children}</S.Container>;
};

export default Text;
