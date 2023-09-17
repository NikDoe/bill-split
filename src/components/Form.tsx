import { FC, FormEvent, ReactNode } from "react";

type FormProps = {
    children: ReactNode | ReactNode[];
    formClassName: string;
    onSubmit: (e: FormEvent) => void;
}

const Form: FC<FormProps> = (props) => {
	const {
		children,
		formClassName,
		onSubmit
	} = props;
    
	return (
		<form 
			className={`form ${formClassName}`}
			onSubmit={onSubmit}
		>
			{children}
		</form>
	);
};

export default Form;