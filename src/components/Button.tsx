import {ReactNode} from "react";

type Variant = "primary" | "secondary" | "warning";

interface Props {
    variant?: Variant;
    children: ReactNode;
}

const Button = ({variant = "primary", children}: Props) => {
    return (
        <button className={`btn btn-${variant}`}>
            {children}
        </button>
    );
};

export default Button;