import { FC } from "react";
import Button from "./Button";
import { TFriend } from "../App";

type FriendItemProps = {
    friend: TFriend;
	currentFriend: null | TFriend;
	onSelect: (friend: TFriend) => void;
}

const FriendItem: FC<FriendItemProps> = function (props) {
	const {
		friend,
		currentFriend,
		onSelect,
	} = props;

	const { id, balance, image, name } = friend;

	const isSelect = currentFriend?.id === id;

	const evenBalance = `Ты и  ${name} квиты`;
	const negativeBalance = `Ты должен ${name} ${Math.abs(balance)}💲`;
	const positiveBalance = `${name} должен тебе ${balance}💲`;

	const balanceClasses = `${balance < 0 ? "red" : balance > 0 ? "green" : ""}`;
	const liElemClasses = `${isSelect ? "selected" : ""}`;

	const balanceElement = (
		<p className={balanceClasses}>
			{balance === 0 && evenBalance}
			{balance > 0 && positiveBalance}
			{balance < 0 && negativeBalance}
		</p>
	);
    
	return (
		<li className={liElemClasses}>
			<img src={image} alt={name} />
			<h3>{name}</h3>
			{balanceElement}
			<Button
				onClick={() => onSelect(friend)}
			>
				{isSelect ? "Закрыть" : "Выбрать"}
			</Button>
		</li>
	);
};

export default FriendItem;