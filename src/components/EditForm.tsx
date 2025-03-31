import { useState } from "react";
import { Wish } from "../App";

type EditFormProps = {
  wish: Wish;
  editWishTitle: (editId: string, newTitle: string) => void;
  setIsEditing: (isEditing: boolean) => void;
};

function EditForm({ wish, editWishTitle, setIsEditing }: EditFormProps) {
  const [inputValue, setInputValue] = useState(wish.title);

  const handleEdit = () => {
    editWishTitle(wish.id, inputValue);
    setIsEditing(false);
  };

  return (
    <div className="mb-2 flex h-10 items-center justify-center">
      <input
        type="text"
        placeholder="Title"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="mr-2 rounded border border-gray-400 bg-white px-4 py-2 text-gray-800 focus:border-gray-500 focus:ring-gray-500"
      />
      <button
        onClick={handleEdit}
        className="rounded bg-green-600 px-4 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Save
      </button>
    </div>
  );
}

export default EditForm;
