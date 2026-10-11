import CartItem from "./CartItem";

export default function Cart({ items, addToCart, RemoveFromCart }) {
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
