import { useEffect, useState } from "react";
import WishForm from "./components/WishForm";
import WishList from "./components/WishList";
import playSound from "./playSound";

export type Wish = {
  id: string;
  title: string;
  priority: "low" | "high";
  completed: boolean;
};

//// um den never-type zu vermeiden z.B so:
//// const initalWishes: Wish[] = []

function App() {
  const storedWishes = JSON.parse(localStorage.getItem("wishes") ?? "[]");

  //// const [wishes, setWishes] = useState(initalWishes);
  //// oder so:
  const [wishes, setWishes] = useState<Wish[]>(storedWishes);

  const addWish = (newWish: Wish) => {
    setWishes((prevWishes) => [...prevWishes, newWish]);
  };

  const deleteWish = (deleteId: string) => {
    setWishes((prevWishes) =>
      prevWishes.filter((wish) => wish.id !== deleteId),
    );
    playSound("delete");
  };

  const changeWishFulfillment = (updateId: string) => {
    setWishes((prevWishes) => {
      return prevWishes.map((wish) =>
        wish.id === updateId ? { ...wish, completed: !wish.completed } : wish,
      );
    });
    playSound("done");
  };

  useEffect(() => {
    localStorage.setItem("wishes", JSON.stringify(wishes));
  }, [wishes]);

  return (
    <div className="flex min-h-screen flex-col items-center gap-4 bg-blue-100">
      <h1 className="my-4 text-4xl">Wish List 🎁</h1>
      <WishForm addWish={addWish} />
      <WishList
        wishes={wishes}
        deleteWish={deleteWish}
        changeWishFulfillment={changeWishFulfillment}
      />
    </div>
  );
}

export default App;
