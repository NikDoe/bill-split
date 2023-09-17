import { FC, useState } from "react";
import FriendItem from "./FriendItem";

export type TFriend = {
    id: number;
	name: string;
	image: string;
	balance: number;
}

type FriendsListProps = {
    friends: TFriend[];
}

const FriendsList: FC<FriendsListProps> = function (props) {
	const {
		friends
	} = props;

	const [currentFriendId, setCurrentFriendId] = useState<null | number>(null);

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