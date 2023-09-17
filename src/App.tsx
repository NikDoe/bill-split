import { useState } from "react";
import Button from "./components/Button";
import FriendsList from "./components/FriendsList";

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

const App = function () {
	const [isOpenFriendForm, setIsOpenFriendForm] = useState(false);

	const handleOpenAddFriendForm = () => {
		setIsOpenFriendForm(prevState => !prevState);
	};

	return (
		<div className="app">
			<div className="sidebar">
				<FriendsList
					friends={initialFriends} 
				/>
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
