import {ReactNode} from "react";
import {useFormContext} from "react-hook-form";

interface Props {
    name: string;
    type: string;
    children: ReactNode;
}

const Input = ({name, children, type}: Props) => {
    const {register} = useFormContext()
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{children}</label>
            <input {...register(name)} type={type} className="form-control" id={name}/>
        </div>
    );
};

export default Input;