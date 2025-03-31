import { useState } from "react";
import { Wish } from "../App";

type WishFormProps = {
  addWish: (newWish: Wish) => void;
};

function WishForm({ addWish }: WishFormProps) {
  const [inputValue, setInputValue] = useState("");
  const [priorityValue, setPriorityValue] = useState<"low" | "high">("low");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newWish: Wish = {
      id: crypto.randomUUID(),
      title: inputValue,
      priority: priorityValue,
      completed: false,
    };

    addWish(newWish);

    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-evenly gap-2">
      <input
        className="rounded-lg border border-gray-600 bg-gray-50 px-4 py-2 text-base text-gray-900 focus:border-gray-500 focus:ring-gray-500"
        type="text"
        placeholder="type wish..."
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <select
        name=""
        id=""
        onChange={(e) => {
          // setPrioritySelectValue(e.target.value as "high" | "low");
          if (e.target.value === "high" || e.target.value === "low") {
            setPriorityValue(e.target.value);
          } else {
            console.warn("Whaaat?");
          }
        }}
      >
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>
      <button
        disabled={inputValue.trim().length === 0}
        className="rounded bg-green-600 px-4 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Add wish
      </button>
    </form>
  );
}

export default WishForm;
