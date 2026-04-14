import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <h1>Shopping Cart</h1>
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <a href="/" className="continue-shopping-btn">
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart</h1>

        <div className="cart-content">
          <div className="cart-items-section">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Size</th>
                  <th>Color</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  const subtotal = (parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2);
                  return (
                    <tr key={item.cartItemId}>
                      <td>
                        <div className="product-cell">
                          <img src={item.primaryImage} alt={item.title} className="product-image" />
                          <span>{item.title}</span>
                        </div>
                      </td>
                      <td>{item.brand}</td>
                      <td>{item.price}</td>
                      <td>{item.size}</td>
                      <td>
                        <div
                          className="color-preview"
                          style={{ backgroundColor: item.color }}
                          title={item.color}
                        ></div>
                      </td>
                      <td>
                        <div className="quantity-control">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="qty-btn"
                          >
                            −
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.cartItemId, parseInt(e.target.value) || 1)
                            }
                            className="qty-input"
                          />
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="qty-btn"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="subtotal">${subtotal}</td>
                      <td>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="remove-btn"
                          title="Remove from cart"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Items ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>$0.00 (Free)</span>
              </div>

              <div className="summary-row">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>

              <hr className="summary-divider" />

              <div className="summary-row total">
                <span>Total</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>

              <button className="checkout-btn">Proceed to Checkout</button>

              <button onClick={clearCart} className="clear-cart-btn">
                Clear Cart
              </button>

              <a href="/" className="continue-shopping-link">
                ← Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
