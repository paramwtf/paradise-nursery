import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} from '../redux/CartSlice'
import './CartItem.css'

function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const itemCount = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <div className="cart-page">
      <nav className="shop-navbar">
        <Link to="/" className="brand">🌿 Paradise Nursery</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">🛒 Cart ({itemCount})</Link>
        </div>
      </nav>

      <main className="cart-content">
        <h1>Your Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/plants" className="cart-button">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {items.map(item => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Unit price: ₹{item.price}</p>
                  <p>Item total: ₹{item.price * item.quantity}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      disabled={item.quantity === 1}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>

                    <button
                      className="delete-button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}

            <div className="cart-summary">
              <h2>Total: ₹{total}</h2>

              <button
                className="cart-button"
                onClick={() => window.alert('Checkout Coming Soon!')}
              >
                Checkout
              </button>

              <button
                className="clear-button"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>

              <Link to="/plants" className="continue-link">
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default CartItem