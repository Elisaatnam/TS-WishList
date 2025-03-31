import { Wish } from "../App";
import WishItem from "./WishItem";

type WishListProps = {
  wishes: Wish[];
  deleteWish: (deleteId: string) => void;
  changeWishFulfillment: (updateId: string) => void;
};

function WishList({
  wishes,
  deleteWish,
  changeWishFulfillment,
}: WishListProps) {
  return (
    <ul>
      {wishes.map((wish) => (
        <WishItem
          key={wish.id}
          wish={wish}
          deleteWish={deleteWish}
          changeWishFulfillment={changeWishFulfillment}
        />
      ))}
    </ul>
  );
}

export default WishList;
