import * as S from './styles';

interface Props extends BaseComponent {
    onClick?: () => void;
}

const SubHeader = ({ dataTestId = 'component-sub-header', children, onClick }: Props) => {
    return (
        <S.Container data-testid={dataTestId}>
            {children}
            {onClick && <S.Chevron />}
        </S.Container>
    );
};

export default SubHeader;
