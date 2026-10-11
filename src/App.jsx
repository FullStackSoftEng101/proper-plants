import { useState } from "react";
import Cart from "./Cart2";
import Plants from "./Plants";

export default function App() {
  const [items, setItems] = useState([]);
  // const items = [];
  // items.length = 0;
  const addToCart = (plant) => {
    const existingItem = items.find((item) => item.id === plant.id);
    if (existingItem) {
      setItems(
        items.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setItems([...items, { ...plant, quantity: 1 }]);
    }
  };
  const removeFromCart = () => {};

  return (
    <>
      <h1>Proper Plants</h1>
      <Plants addToCart={addToCart} />

      <Cart
        items={items}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </>
  );
}
