import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import Form from "./Form";
import Button from "./Button";
import { TFriend } from "../App";

type FormAddFriendsProps = {
	setFriends: Dispatch<SetStateAction<TFriend[]>>;
	setIsOpenFriendForm: Dispatch<SetStateAction<boolean>>;
}

const initialFormData = {
	friendName: "",
	imageUrl: "https://i.pravatar.cc/48"
};

const FormAddFriends: FC<FormAddFriendsProps> = (props) => {
	const {
		setFriends,
		setIsOpenFriendForm
	} = props;

	const [formData, setFormData] = useState(initialFormData);

	const { friendName, imageUrl } = formData;

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if(!friendName || !imageUrl) return;
		
		const newFriend: TFriend = {
			id: Date.now(),
			balance: 0,
			image: imageUrl,
			name: friendName
		};

		setFriends(prevState => [...prevState, newFriend]);
		setFormData(initialFormData);
		setIsOpenFriendForm(false);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const formContent = (
		<>
			<label>👽 Имя друга </label>
			<input
				type="text"
				name="friendName"
				value={friendName}
				onChange={handleInputChange}
			/>
			<label>🌇URL изображения </label>
			<input
				type="text"
				name="imageUrl"
				value={imageUrl}
				onChange={handleInputChange}
			/>
			<Button>Добавить</Button>
		</>
	);

	return (
		<Form
			formClassName="form-add-friend"
			onSubmit={handleSubmit}
		>
			{formContent}
		</Form>
	);
};

export default FormAddFriends;