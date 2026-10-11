import Cart from "./CArt";
import Plants from "./Plants";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const addToCart = () => {};
  const removeFromCart = () => {};

  return (
    <>
      <h1>Proper Plantes</h1>
      <Plants addToCart={addToCart} />
      <Cart
        items={items}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </>
  );
}
