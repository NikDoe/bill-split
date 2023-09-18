import { Dispatch, FC, SetStateAction } from "react";
import FriendItem from "./FriendItem";
import { TFriend } from "../App";

type FriendsListProps = {
    friends: TFriend[];
	currentFriendId: null | number;
	setCurrentFriendId: Dispatch<SetStateAction<null | number>>;
}

const FriendsList: FC<FriendsListProps> = function (props) {
	const {
		friends,
		currentFriendId,
		setCurrentFriendId,
	} = props;

	return (
		<ul>
			{
				friends.map(
					friend => (
						<FriendItem
							key={friend.id}
							friend={friend}
							currentFriendId={currentFriendId}
							setCurrentFriendId={setCurrentFriendId}
						/>
					)
				)
			}
		</ul>
	);
};

export default FriendsList;