interface Props extends BaseComponent {}

const Text = ({ children }: Props) => {
    return <div data-testid="basic-text-component">{children}</div>;
};

export default Text;
