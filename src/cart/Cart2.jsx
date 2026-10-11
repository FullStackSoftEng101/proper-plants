import CartItem from "./CartItem";

export default function Cart({ items }) {
  // export default function Cart({ items, addToCart, removeFromCart }) {
  console.debug(items.lenght);
  if (items.length === 0) return <p>Empty Cart</p>;

  return (
    <ul>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          //   addToCart={addToCart}
          //   removeFromCart={removeFromCart}
        />
      ))}
    </ul>
  );
}
