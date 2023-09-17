import { FC, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode | ReactNode[];
    onClick?: () => void;
}

const Button: FC<ButtonProps> = function (props) {
	const {
		children,
		onClick
	} = props;
    
	return (
		<button
			className="button"
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;