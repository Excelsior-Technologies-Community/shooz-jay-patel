import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartSidebar.css";

function CartSidebar({ isOpen, onClose, onOpen }) {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/cart");
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="cart-sidebar__overlay" onClick={onClose}></div>}

      {/* Sidebar */}
      <div className={`cart-sidebar ${isOpen ? "cart-sidebar--open" : ""}`}>
        <div className="cart-sidebar__header">
          <h2>Shopping Cart</h2>
          <button 
            className="cart-sidebar__close" 
            onClick={onClose}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-sidebar__empty">
            <p>Your cart is empty</p>
            <button 
              className="cart-sidebar__continue-btn"
              onClick={onClose}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-sidebar__items">
              {cartItems.map((item) => {
                const subtotal = (parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2);
                return (
                  <div key={item.cartItemId} className="cart-sidebar__item">
                    <div className="cart-sidebar__item-image">
                      <img src={item.primaryImage} alt={item.title} />
                    </div>

                    <div className="cart-sidebar__item-details">
                      <h3 className="cart-sidebar__item-title">{item.title}</h3>
                      <p className="cart-sidebar__item-brand">{item.brand}</p>
                      <p className="cart-sidebar__item-price">{item.price} x {item.quantity}</p>
                      
                      <div className="cart-sidebar__item-options">
                        <span className="cart-sidebar__option">Size: {item.size}</span>
                        <div 
                          className="cart-sidebar__color" 
                          style={{ backgroundColor: item.color }}
                          title={item.color}
                        ></div>
                      </div>

                      <div className="cart-sidebar__item-controls">
                        <div className="cart-sidebar__quantity">
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="qty-btn"
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="qty-btn"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          className="cart-sidebar__remove"
                          onClick={() => removeFromCart(item.cartItemId)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="cart-sidebar__item-subtotal">
                      ${subtotal}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart-sidebar__footer">
              <div className="cart-sidebar__summary">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <p className="cart-sidebar__note">
                  Taxes and shipping calculated at checkout
                </p>
              </div>

              <button 
                className="cart-sidebar__checkout-btn"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>

              <button 
                className="cart-sidebar__continue-shopping-btn"
                onClick={onClose}
              >
                Continue Shopping
              </button>

              <button 
                className="cart-sidebar__clear-btn"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartSidebar;
