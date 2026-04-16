import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function Wishlist() {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="wishlist-container">
          <h1>My Wishlist</h1>
          <div className="empty-wishlist">
            <p>Your wishlist is empty</p>
            <a href="/" className="start-shopping-btn">
              Start Shopping
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="wishlist-container">
        <div className="wishlist-header">
          <h1>My Wishlist</h1>
          <p className="wishlist-count">({wishlistItems.length} items)</p>
        </div>

        <div className="wishlist-actions">
          <button onClick={clearWishlist} className="clear-wishlist-btn">
            Clear Wishlist
          </button>
        </div>

        <div className="wishlist-grid">
          {wishlistItems.map((product) => (
            <div key={product.id} className="wishlist-card">
              <div className="wishlist-image-container">
                <img src={product.primaryImage} alt={product.title} className="wishlist-image" />
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="wishlist-remove-btn"
                  title="Remove from wishlist"
                >
                  ✕
                </button>
              </div>

              <div className="wishlist-card-content">
                <h3 className="wishlist-product-title">{product.title}</h3>
                <p className="wishlist-product-brand">{product.brand}</p>

                <div className="wishlist-product-meta">
                  <span className="wishlist-price">{product.price}</span>
                  {product.swatches && (
                    <div className="wishlist-swatches">
                      {product.swatches.map((color, idx) => (
                        <div
                          key={idx}
                          className="wishlist-swatch"
                          style={{ backgroundColor: color }}
                          title={color}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>

                {product.countdown && (
                  <div className="wishlist-countdown">
                    <span className="countdown-label">Limited Time:</span>
                    <span className="countdown-time">
                      {product.countdown.days}d {product.countdown.hours}h
                    </span>
                  </div>
                )}

                <div className="wishlist-card-actions">
                  <button
                    onClick={() => handleMoveToCart(product)}
                    className="move-to-cart-btn"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Wishlist;