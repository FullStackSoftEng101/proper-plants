export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <li className="cart-item">
      <div>
        {item.image}
        {item.name}
      </div>
      <div className="cart-item-qty">
        <button onClick={() => removeFromCart(item)}>-</button>
        <p>{item.quantity}</p>
        <button onClick={() => addToCart(item)}>+</button>
      </div>
    </li>
  );
}
