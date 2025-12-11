import CartList from './CartList'
import './Cart.css'

function Cart({ cart, onRemove, onUpdateQuantity }) {

  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          <CartList
            items={cart}
            onRemove={onRemove}
            onUpdateQuantity={onUpdateQuantity}
          />
          <div className="cart-summary">
            <div className="cart-totals">
              <div className="cart-total-item">
                <span>Total Items:</span>
                <span className="cart-total-value">{totalItems}</span>
              </div>
              <div className="cart-total-item">
                <span>Total Price:</span>
                <span className="cart-total-value">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart

