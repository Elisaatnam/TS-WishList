import { useState } from "react";
import { Wish } from "../App";
import EditForm from "./EditForm";

type WishItemProps = {
  wish: Wish;
  deleteWish: (deleteId: string) => void;
  changeWishFulfillment: (updateId: string) => void;
  editWishTitle: (editId: string, newTitle: string) => void;
};

function WishItem({
  wish,
  deleteWish,
  changeWishFulfillment,
  editWishTitle,
}: WishItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <EditForm
      wish={wish}
      editWishTitle={editWishTitle}
      setIsEditing={setIsEditing}
    />
  ) : (
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
        onClick={() => setIsEditing(true)}
        className="rounded border border-gray-400 bg-white px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        Edit
      </button>
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
