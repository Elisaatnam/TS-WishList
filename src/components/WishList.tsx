import { Wish } from "../App";
import WishItem from "./WishItem";

type WishListProps = {
  wishes: Wish[];
  deleteWish: (deleteId: string) => void;
  changeWishFulfillment: (updateId: string) => void;
  editWishTitle: (editId: string, newTitle: string) => void;
};

function WishList({
  wishes,
  deleteWish,
  changeWishFulfillment,
  editWishTitle,
}: WishListProps) {
  return (
    <ul>
      {wishes.map((wish) => (
        <WishItem
          key={wish.id}
          wish={wish}
          deleteWish={deleteWish}
          changeWishFulfillment={changeWishFulfillment}
          editWishTitle={editWishTitle}
        />
      ))}
    </ul>
  );
}

export default WishList;
