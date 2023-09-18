import { useState } from "react";
import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import FormAddFriends from "./components/FormAddFriends";
import FormSplitBill from "./components/FormSplitBill";

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
	const [currentFriend, setCurrentFriend] = useState<null | TFriend>(null);

	const handleOpenAddForm = () => {
		setIsOpenFriendForm(prevState => !prevState);
	};

	const handleAddFriend = (newFriend: TFriend) => {
		setFriends(currFriends => [...currFriends, newFriend]);
		setIsOpenFriendForm(false);
	};

	const handleSelectFriend = (friend: TFriend) => {
		setCurrentFriend(
			currFriend => currFriend?.id === friend.id ? null : friend
		);
	};

	const handleSplitBill = (friendExpense: number) => {
		setFriends(currFriends => 
			currFriends.map(friend => 
				friend.id === currentFriend?.id
					? { ...friend , balance: friend.balance + friendExpense }
					: friend
			)
		);
		
		setCurrentFriend(null);
	};

	const friendsList = (
		<FriendsList
			friends={friends}
			currentFriend={currentFriend}
			onSelect={handleSelectFriend}
		/>
	);

	const friendsForm = (
		<FormAddFriends
			onAddFriend={handleAddFriend}
		/>
	);

	const billForm = (
		<FormSplitBill
			currentFriend={currentFriend}
			onSplitBill={handleSplitBill}
		/>
	);

	const buttonElement = (
		<Button 
			onClick={handleOpenAddForm}
		>
			{isOpenFriendForm ? "Закрыть форму" : "Добавить друга"}
		</Button>
	);

	return (
		<div className="app">
			<div className="sidebar">
				{friendsList}
				{isOpenFriendForm && friendsForm}
				{buttonElement}
			</div>
			{currentFriend && billForm}
		</div>
	);
};

export default App;
