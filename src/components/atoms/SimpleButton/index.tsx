interface Props extends BaseComponent {
    onClick: () => void;
}

const SimpleButton = ({ children, onClick }: Props) => {
    return (
        <button data-testid="component-simple-button" onClick={() => onClick()}>{children}</button>
    );
};

export default SimpleButton;
