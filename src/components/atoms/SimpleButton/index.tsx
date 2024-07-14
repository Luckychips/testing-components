interface Props extends BaseComponent {
    onClick: () => void;
}

const SimpleButton = ({ dataTestId = 'component-simple-button', children, onClick }: Props) => {
    return (
        <button data-testid={dataTestId} onClick={() => onClick()}>
            {children}
        </button>
    );
};

export default SimpleButton;
