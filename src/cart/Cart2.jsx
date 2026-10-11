import CartItem from "./CartItem";
import "./cart.css";

// export default function Cart({ items }) {
export default function Cart({ items, addToCart, removeFromCart }) {
  console.debug(items.lenght);
  if (items.length === 0)
    return (
      <>
        <h2>Cart</h2>
        <p>Empty Cart</p>
      </>
    );

  return (
    <section>
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
    </section>
  );
}
