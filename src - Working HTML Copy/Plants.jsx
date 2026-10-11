import { useState } from "react";
import PLANTS from "./data";
import Plant from "./Plant";
export default function Plants({ addToCart }) {
  const [plants] = useState(PLANTS);
  return (
    <ul>
      {plants.map((plant) => (
        <Plant key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </ul>
  );
}
