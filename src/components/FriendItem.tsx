import { Dispatch, FC, SetStateAction } from "react";
import { TFriend } from "./FriendsList";

type FriendItemProps = {
    friend: TFriend;
	currentFriendId: number | null;
	setCurrentFriendId: Dispatch<SetStateAction<null | number>>
}

const FriendItem: FC<FriendItemProps> = function (props) {
	const {
		friend,
		currentFriendId,
		setCurrentFriendId
	} = props;

	const { id, balance, image, name } = friend;

	const isSelect = currentFriendId === id;

	const evenBalance = `Ты и  ${name} квиты`;
	const negativeBalance = `Ты должен ${name} ${balance}💲`;
	const positiveBalance = `${name} должен тебе ${balance}💲`;

	const balanceClasses = `${balance < 0 ? "red" : balance > 0 ? "green" : ""}`;
	const liElemClasses = `${isSelect ? "selected" : ""}`;

	const handleClick = () => {
		setCurrentFriendId(isSelect ? null : id);
	};

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
			<button
				className="button"
				onClick={handleClick}
			>
				{isSelect ? "Закрыть" : "Выбрать"}
			</button>
		</li>
	);
};

export default FriendItem;