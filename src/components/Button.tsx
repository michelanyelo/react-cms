import {ReactNode, MouseEvent} from "react";

type variant = "primary" | "secondary" | "warning";
type buttonType = "button" | "submit" | "reset";

interface Props {
    variant?: variant;
    children: ReactNode;
    onClick?: (e: MouseEvent) => void;
    type?: buttonType;
}

const Button = ({variant = "primary", children, onClick, type = "button"}: Props) => {
    return (
        <button
            onClick={onClick}
            className={`btn btn-${variant}`}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;