import { useState } from "react";
import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import FormAddFriends from "./components/FormAddFriends";

const initialFriends = [
	{
		id: 118836,
		name: "Clark",
		image: "https://i.pravatar.cc/48?u=118836",
		balance: -7,
	},
	{
		id: 933372,
		name: "Sarah",
		image: "https://i.pravatar.cc/48?u=933372",
		balance: 20,
	},
	{
		id: 499476,
		name: "Anthony",
		image: "https://i.pravatar.cc/48?u=499476",
		balance: 0,
	},
];

export type TFriend = typeof initialFriends[number];

const App = function () {
	const [friends, setFriends] = useState<TFriend[]>(initialFriends);
	const [isOpenFriendForm, setIsOpenFriendForm] = useState(false);

	const handleOpenAddFriendForm = () => {
		setIsOpenFriendForm(prevState => !prevState);
	};

	const friendsForm = (
		<FormAddFriends
			setFriends={setFriends}
			setIsOpenFriendForm={setIsOpenFriendForm}
		/>
	);

	return (
		<div className="app">
			<div className="sidebar">
				<FriendsList
					friends={friends} 
				/>
				{isOpenFriendForm && friendsForm}
				<Button 
					onClick={handleOpenAddFriendForm}
				>
					{isOpenFriendForm ? "Закрыть форму" : "Добавить друга"}
				</Button>
			</div>
		</div>
	);
};

export default App;
