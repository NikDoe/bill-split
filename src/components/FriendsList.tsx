import { FC } from "react";

type TFriend = {
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

	return (
		<ul>
			{
				friends.map(
					friend => (
						<li
							key={friend.id}
						>
							<img src={friend.image} alt={friend.name} />
							<h3>{friend.name}</h3>
							<p>баланс</p>
						</li>
					)
				)
			}
		</ul>
	);
};

export default FriendsList;