# Shooz - Cart & Wishlist Functionality Documentation

## Overview
This project now includes complete **Add to Cart** and **Wishlist** functionalities. These features are built using React Context API for state management and provide a seamless shopping experience.

## Features Added

### 1. **Add to Cart Functionality**
- Users can add products to their shopping cart
- Cart items include:
  - Product details (name, brand, price, image)
  - Quantity selection
  - Size selection (XS, S, M, L, XL, XXL)
  - Color selection (if available)
- Cart operates with Context API for global state management
- Cart items persist in memory during the session

### 2. **Wishlist Functionality**
- Users can save products to their wishlists
- Wishlist items show:
  - Product image and details
  - Quick "Add to Cart" option
  - Remove from wishlist option
- Heart icon with wishlist count in navbar
- Wishlist operates independently from cart

### 3. **Shopping Cart Page** (`/cart`)
Features:
- Browse all cart items in a table format
- View product details, size, color, and quantity
- Adjust quantities using +/- buttons or direct input
- Remove items from cart
- View order summary with total price
- Proceed to checkout button (extensible for payment integration)
- Clear cart option
- Continue shopping link

### 4. **Wishlist Page** (`/wishlist`)
Features:
- Grid layout displaying wishlist items
- Product card with image and details
- Move item to cart
- Remove from wishlist
- Color swatch display when available
- Countdown timer for limited offers (if product has it)
- Clear wishlist option

## File Structure

### New Context Files (`src/context/`)
```
src/context/
├── CartContext.jsx          # Cart state management
├── WishlistContext.jsx      # Wishlist state management
└── NavigationContext.jsx    # Page navigation management
```

### New Page Components (`src/pages/`)
```
src/pages/
├── Cart.jsx                 # Shopping cart page
├── Cart.css                 # Cart page styles
├── Wishlist.jsx            # Wishlist page
└── Wishlist.css            # Wishlist page styles
```

### Updated Components
- `src/App.jsx` - Now wrapped with context providers
- `src/components/FeaturedProducts.jsx` - Integrated cart/wishlist functionality
- `src/components/FeaturedProducts.css` - Added size selector and wishlist active styles
- `src/components/Navbar.jsx` - Updated with cart/wishlist navigation and counts

## How to Use

### For Customers

#### Adding Products to Cart:
1. On the Featured Products section, select desired size from dropdown
2. Click on a color swatch to select color (if available)
3. Click "Add To Cart" button
4. Product will be added with selected options

#### Managing Cart:
1. Click the shopping bag icon in navbar with cart count
2. View all cart items in the cart table
3. Adjust quantities using +/- buttons or input field
4. Click "Remove" to delete an item
5. View total price in the order summary
6. Click "Proceed to Checkout" to continue shopping

#### Using Wishlist:
1. Click the heart icon on product cards to add to wishlist
2. Heart icon becomes active (red) when product is in wishlist
3. Click cart icon in navbar to see wishlist count
4. Click wishlist count to view all saved items
5. Click "Add to Cart" to move item to cart
6. Click "Remove" or "Clear Wishlist" to remove items

### For Developers

#### Context Usage in Components:

**Using Cart Context:**
```jsx
import { useCart } from "../context/CartContext";

function MyComponent() {
  const { 
    cartItems, 
    addToCart, 
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems
  } = useCart();
  
  // Use the cart functions...
}
```

**Using Wishlist Context:**
```jsx
import { useWishlist } from "../context/WishlistContext";

function MyComponent() {
  const { 
    wishlistItems, 
    addToWishlist, 
    removeFromWishlist,
    isInWishlist,
    clearWishlist
  } = useWishlist();
  
  // Use the wishlist functions...
}
```

**Using Navigation Context:**
```jsx
import { useNavigation } from "../context/NavigationContext";

function MyComponent() {
  const { currentPage, navigateTo } = useNavigation();
  
  // Navigate to different pages
  navigateTo("home");      // Go to home
  navigateTo("cart");      // Go to cart
  navigateTo("wishlist");  // Go to wishlist
}
```

## CSS Files Created/Updated

### New CSS Files:
- `src/pages/Cart.css` - Complete styling for cart page (responsive)
- `src/pages/Wishlist.css` - Complete styling for wishlist page (responsive)

### Modified CSS:
- `src/components/FeaturedProducts.css` - Added:
  - `.featured-products__size-selector` - Size dropdown styling
  - `.featured-products__size-select` - Size select styling
  - `.featured-products__wishlist--active` - Active wishlist button styling

## State Management Details

### Cart Context API

**Available Methods:**
- `addToCart(product, quantity, size, color)` - Add product to cart
- `removeFromCart(cartItemId)` - Remove item by cart item ID
- `updateQuantity(cartItemId, quantity)` - Update item quantity
- `clearCart()` - Clear all items from cart
- `getTotalPrice()` - Get sum of all items
- `getTotalItems()` - Get total quantity of items

### Wishlist Context API

**Available Methods:**
- `addToWishlist(product)` - Add product to wishlist
- `removeFromWishlist(productId)` - Remove product by ID
- `isInWishlist(productId)` - Check if product is on wishlist
- `clearWishlist()` - Clear entire wishlist

### Navigation Context API

**Available Methods:**
- `navigateTo(page)` - Navigate to specified page
- `currentPage` - Current page state value

## Responsive Design

Both Cart and Wishlist pages are fully responsive:
- **Desktop (1200px+):** Full layout with all tables/grids
- **Tablet (768px-1199px):** Adjusted grid and table layouts
- **Mobile (Below 768px):** Optimized single column layouts

## Future Enhancement Ideas

1. **Persistent Storage:** Integrate localStorage/sessionStorage to persist cart and wishlist
2. **Checkout Integration:** Connect to payment gateway
3. **Product Variants:** Add more variant options (bundle, warranty, etc.)
4. **Analytics:** Track cart abandonment, popular items
5. **Recommendations:** Show similar products or "You may also like" sections
6. **Sharing:** Share wishlist with others
7. **Price Alerts:** Notify when wishlisted items go on sale
8. **Quick View:** Modal popup for quick product preview

## Browser Support

The implemented features work on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Cart and wishlist data is stored in React state and will be cleared on page refresh
- To make data persistent, integrate with localStorage or a backend API
- Alert notifications appear when items are added to cart (can be customized)
- URLs are currently managed via React state routing, consider adding proper routing library (react-router-dom) for production

