import { ChangeEvent, FC, FormEvent, useState } from "react";
import Button from "./Button";
import Form from "./Form";
import { TFriend } from "../App";

type FormSplitBillProps = {
	currentFriend: null | TFriend;
	onSplitBill: (friendExpense: number) => void;
}

const initialFormData = {
	bill: "",
	myExpense: "",
	whoPays: 0
};

const FormSplitBill: FC<FormSplitBillProps> = function (props) {
	const {
		currentFriend,
		onSplitBill
	} = props;

	const [formData, setFormData] = useState(initialFormData);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const friendExpense = Number(formData.bill) - Number(formData.myExpense);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		onSplitBill(formData.whoPays === 0 ? friendExpense: -friendExpense);
	};

	const formContent = (
		<>
			<h2>разделение счёта с {currentFriend?.name}</h2>
			<label>💵 Счёт </label>
			<input
				type="text"
				name="bill"
				value={formData.bill}
				onChange={handleInputChange}
			/>
			<label>👻 Мой взнос</label>
			<input
				type="text"
				name="myExpense"
				value={formData.myExpense}
				onChange={handleInputChange}
			/>
			<label>👽 взнос {currentFriend?.name}</label>
			<input
				type="text"
				name="friendExpense"
				disabled
				value={friendExpense}
			/>
			<label>Кто платит?</label>
			<select
				name="whoPays"
				value={formData.whoPays}
				onChange={handleInputChange}
			>
				<option value={0}>Я</option>
				<option value={1}>{currentFriend?.name}</option>
			</select>
			<Button>
				Разделить счёт
			</Button>
		</>
	);

	return (
		<Form
			formClassName="form-split-bill"
			onSubmit={handleSubmit}
		>
			{formContent}
		</Form>
	);
};

export default FormSplitBill;