import {ReactNode} from "react";
import {useFormContext} from "react-hook-form";

interface Props {
    name: string;
    type: string;
    children: ReactNode;
}

const Input = ({name, children, type}: Props) => {
    const {register, formState, getFieldState} = useFormContext()
    const {error} = getFieldState(name, formState)
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{children}</label>
            <input
                {...register(name)}
                type={type}
                className="form-control"
                id={name}
            />
            {error && <div className="text-danger">{error.message}</div>}
        </div>
    );
};

export default Input;