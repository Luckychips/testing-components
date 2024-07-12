interface Props {
    title?: string;
}

const Text = ({ title = '' }: Props) => {
    return <div data-testid="basic-text-component">{title}</div>;
};

export default Text;
