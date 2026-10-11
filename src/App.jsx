import { useState } from "react";
import Cart from "./Cart2";
import Plants from "./Plants";

export default function App() {
  const [items, setItems] = useState([]);
  // const items = [];
  // items.length = 0;
  const addToCart = () => {};
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
