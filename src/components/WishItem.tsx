import { Wish } from "../App";

type WishItemProps = {
  wish: Wish;
  deleteWish: (deleteId: string) => void;
  changeWishFulfillment: (updateId: string) => void;
};

function WishItem({ wish, deleteWish, changeWishFulfillment }: WishItemProps) {
  return (
    <li className="mb-2 flex h-10 items-center justify-between">
      <input type="checkbox" onChange={() => changeWishFulfillment(wish.id)} />
      <span
        className={`${
          wish.priority === "high" ? "bg-red-400" : "bg-green-400"
        } ${
          wish.completed ? "line-through" : ""
        } roundes mx-2 flex h-full w-60 items-center justify-center rounded`}
      >
        {wish.title}
      </span>
      <button
        onClick={() => deleteWish(wish.id)}
        className="rounded border border-gray-400 bg-white px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        Delete
      </button>
    </li>
  );
}
export default WishItem;
