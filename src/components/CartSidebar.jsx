import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

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
                // Handle both price formats (string "$129.99" and number 129.99)
                const priceValue = typeof item.price === 'string' 
                  ? parseFloat(item.price.replace("$", "")) 
                  : item.price;
                const subtotal = (priceValue * (item.quantity || 1)).toFixed(2);
                
                // Handle both property name formats (title/name, primaryImage/image)
                const itemTitle = item.title || item.name || "Product";
                const itemImage = item.primaryImage || item.image || "";
                const priceDisplay = typeof item.price === 'string' ? item.price : `$${item.price.toFixed(2)}`;
                
                return (
                  <div key={item.cartItemId || item.id} className="cart-sidebar__item">
                    <div className="cart-sidebar__item-image">
                      <img src={itemImage} alt={itemTitle} />
                    </div>

                    <div className="cart-sidebar__item-details">
                      <h3 className="cart-sidebar__item-title">{itemTitle}</h3>
                      <p className="cart-sidebar__item-brand">{item.brand}</p>
                      <p className="cart-sidebar__item-price">{priceDisplay} x {item.quantity || 1}</p>
                      
                      {item.size && (
                        <div className="cart-sidebar__item-options">
                          <span className="cart-sidebar__option">Size: {item.size}</span>
                          {item.color && (
                            <div 
                              className="cart-sidebar__color" 
                              style={{ backgroundColor: item.color }}
                              title={item.color}
                            ></div>
                          )}
                        </div>
                      )}

                      <div className="cart-sidebar__item-controls">
                        <div className="cart-sidebar__quantity">
                          <button 
                            onClick={() => updateQuantity(item.cartItemId || item.id, (item.quantity || 1) - 1)}
                            className="qty-btn"
                          >
                            −
                          </button>
                          <span>{item.quantity || 1}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartItemId || item.id, (item.quantity || 1) + 1)}
                            className="qty-btn"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          className="cart-sidebar__remove"
                          onClick={() => removeFromCart(item.cartItemId || item.id)}
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
