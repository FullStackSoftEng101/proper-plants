import CartItem from "./CartItem";

export default function Cart2({ items, addToCart, RemoveFromCart }) {
  if (items.length === 0) return <p>Empty Cart</p>;

  return (
    <ul>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          RemoveFromCart={RemoveFromCart}
        />
      ))}
    </ul>
  );
}
