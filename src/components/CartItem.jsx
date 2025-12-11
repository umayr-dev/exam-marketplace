import "./CartItem.css";

function CartItem({ item, onRemove, onUpdateQuantity }) {
  const handleQuantityChange = (delta) => {
    const newQuantity = item.quantity + delta;
    onUpdateQuantity(item.id, newQuantity);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-info">
        <h4 className="cart-item-title">{item.title}</h4>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
        <div className="cart-item-controls">
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(-1)}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="cart-item-quantity">{item.quantity}</span>
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(1)}
            aria-label="Increase quantity"
          >
            +
          </button>
          <button
            className="remove-btn"
            onClick={() => onRemove(item.id)}
            aria-label="Remove item"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
