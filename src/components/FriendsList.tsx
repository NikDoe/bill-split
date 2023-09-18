import { FC } from "react";
import FriendItem from "./FriendItem";
import { TFriend } from "../App";

type FriendsListProps = {
    friends: TFriend[];
	currentFriend: null | TFriend;
	onSelect: (friend: TFriend) => void;
}

const FriendsList: FC<FriendsListProps> = function (props) {
	const {
		friends,
		currentFriend,
		onSelect,
	} = props;

	return (
		<ul>
			{
				friends.map(
					friend => (
						<FriendItem
							key={friend.id}
							friend={friend}
							currentFriend={currentFriend}
							onSelect={onSelect}
						/>
					)
				)
			}
		</ul>
	);
};

export default FriendsList;