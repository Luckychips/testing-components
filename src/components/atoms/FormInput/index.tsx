interface Props {
    label: string;
    name: string;
}

const FormInput = ({ label, name }: Props) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input name={name} id={name} data-testid={name} />
        </>
    );
};

export default FormInput;
