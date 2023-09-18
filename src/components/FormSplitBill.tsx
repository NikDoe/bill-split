import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import Button from "./Button";
import Form from "./Form";
import { TFriend } from "../App";

type FormSplitBillProps = {
	friends: TFriend[];
	currentFriendId: null | number;
	setCurrentFriendId: Dispatch<SetStateAction<null | number>>;
	setFriends: Dispatch<SetStateAction<TFriend[]>>;
}

const initialFormData = {
	bill: "",
	myExpense: "",
	whoPays: 0
};

const FormSplitBill: FC<FormSplitBillProps> = function (props) {
	const {
		friends,
		setFriends,
		currentFriendId,
		setCurrentFriendId,
	} = props;

	const [formData, setFormData] = useState(initialFormData);

	const seletedFriend = friends.find(friend => friend.id === currentFriendId);


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

		const updatedFriendsList = friends.slice();

		const index = updatedFriendsList.findIndex(friend => friend.id === currentFriendId);

		const updatedBalance = formData.whoPays === 0 ? friendExpense : -friendExpense;

		if(index !== -1) {
			updatedFriendsList[index] = { ...updatedFriendsList[index], balance: updatedBalance };
			setFriends(updatedFriendsList);
		}
		
		setCurrentFriendId(null);
	};

	const formContent = (
		<>
			<h2>разделение счёта с {seletedFriend?.name}</h2>
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
			<label>👽 взнос {seletedFriend?.name}</label>
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
				<option value={1}>{seletedFriend?.name}</option>
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