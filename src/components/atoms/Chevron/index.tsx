import * as S from './styles';

type Direction = 'up' | 'down' | 'left' | 'right';
type Size = 'small' | 'large';

interface Props {
    direction?: Direction;
    size?: Size;
}

const Chevron = ({ direction = 'right', size = 'small' }: Props) => {
    return (
        <S.Container
            data-testid={`component-chevron-${size}-${direction}`}
            className={`${direction} ${size}`}
        />
    );
};

export default Chevron;
