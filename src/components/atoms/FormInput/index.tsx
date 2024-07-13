import { useState } from 'react';

interface Props {
    label: string;
    name: string;
}

const FormInput = ({ label, name }: Props) => {
    const [value, setValue] = useState('');
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                data-testid={name}
                name={name}
                id={name}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    );
};

export default FormInput;
