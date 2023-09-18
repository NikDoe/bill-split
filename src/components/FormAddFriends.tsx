import { ChangeEvent, FC, FormEvent, useState } from "react";
import Form from "./Form";
import Button from "./Button";
import { TFriend } from "../App";

type FormAddFriendsProps = {
	onAddFriend: (newFriend: TFriend) => void;
}

const initialFormData = {
	friendName: "",
	imageUrl: "https://i.pravatar.cc/48"
};

const FormAddFriends: FC<FormAddFriendsProps> = (props) => {
	const {
		onAddFriend
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

		onAddFriend(newFriend);
		setFormData(initialFormData);
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