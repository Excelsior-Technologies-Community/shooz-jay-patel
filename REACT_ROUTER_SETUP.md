# React Router Setup - Complete Documentation

## ✅ Installation Complete

**Package Installed:** `react-router-dom` v6.x

## Project Routes

Your Shooz project now has the following routes:

### Routes Structure
```
/ (Home)
  ├── Hero & Collections
  ├── Featured Products (with Add to Cart)
  ├── All Components
  └── Footer

/cart (Shopping Cart Page)
  ├── Full cart details
  ├── Quantity controls
  └── Checkout option

/wishlist (Wishlist Page)
  ├── Saved products grid
  ├── Quick Add to Cart
  └── Remove items
```

## Key Changes Made

### 1. **App.jsx** - Main Router Setup
```jsx
<BrowserRouter>
  <CartProvider>
    <WishlistProvider>
      <Routes>
        <Route path="/" element={<Home onOpenCart={onOpenCart} />} />
        <Route path="/cart" element={<CartPage onOpenCart={onOpenCart} />} />
        <Route path="/wishlist" element={<WishlistPage onOpenCart={onOpenCart} />} />
      </Routes>
      <CartSidebar ... />
    </WishlistProvider>
  </CartProvider>
</BrowserRouter>
```

### 2. **Navbar.jsx** - Navigation Component
- Uses `Link` component for logo navigation
- Uses `useNavigate()` for programmatic navigation
- Wishlist button navigates to `/wishlist`
- Cart button opens the cart sidebar

```jsx
const navigate = useNavigate();

// Wishlist navigation
<IconButton onClick={() => navigate("/wishlist")} />

// Cart sidebar
<IconButton onClick={onOpenCart} />
```

### 3. **CartSidebar.jsx** - Updated
- Uses `useNavigate()` from React Router
- "Proceed to Checkout" navigates to `/cart`

```jsx
const navigate = useNavigate();
const handleCheckout = () => {
  navigate("/cart");
  onClose();
};
```

## How Navigation Works

### URL Changes
- **Click Home Logo** → `/` (renders Home page)
- **Click Wishlist Icon** → `/wishlist` (renders Wishlist page)
- **Click Cart Icon** → Opens Cart Sidebar (no URL change)
- **Click Checkout** → `/cart` (renders Cart page)

### Browser Features
✅ Back/Forward buttons work correctly
✅ URL bar shows current route
✅ Browser history is maintained
✅ Deep linking (sharing links) works

## Components Updated

### Files Modified:
1. `src/App.jsx` - Wrapped with BrowserRouter, added Routes
2. `src/components/Navbar.jsx` - Uses Link and useNavigate
3. `src/components/CartSidebar.jsx` - Uses useNavigate
4. Removed: `NavigationContext.jsx` (replaced by React Router)

### Files Unchanged:
- `src/context/CartContext.jsx` ✓
- `src/context/WishlistContext.jsx` ✓
- `src/pages/Cart.jsx` ✓
- `src/pages/Wishlist.jsx` ✓
- All component styling ✓

## Usage Examples

### Navigating from Components

**Navigate using Link (preferred for navigation links):**
```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/cart">Go to Cart</Link>
<Link to="/wishlist">View Wishlist</Link>
```

**Navigate programmatically (for buttons/events):**
```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

// Navigate on button click
<button onClick={() => navigate("/wishlist")}>Go to Wishlist</button>

// Navigate on form submission
function handleSubmit(e) {
  e.preventDefault();
  navigate("/cart");
}
```

**Navigate with state (optional):**
```jsx
navigate("/cart", { state: { from: "checkout" } });

// Access state in target component
import { useLocation } from "react-router-dom";
const location = useLocation();
console.log(location.state); // { from: "checkout" }
```

## Adding New Routes

To add a new route:

**Step 1:** Create page component
```jsx
// src/pages/Checkout.jsx
function Checkout() {
  return <div>Checkout Page</div>;
}
export default Checkout;
```

**Step 2:** Import in App.jsx
```jsx
import Checkout from "./pages/Checkout";
```

**Step 3:** Add route
```jsx
<Route path="/checkout" element={<CheckoutPage onOpenCart={onOpenCart} />} />
```

**Step 4:** Navigate to it
```jsx
navigate("/checkout");
// or
<Link to="/checkout">Go to Checkout</Link>
```

## Useful React Router Hooks

### 1. `useNavigate()` - Programmatic Navigation
```jsx
const navigate = useNavigate();
navigate("/cart"); // Navigate to /cart
navigate(-1); // Go back
navigate(1); // Go forward
```

### 2. `useLocation()` - Get Current Route
```jsx
const location = useLocation();
console.log(location.pathname); // "/cart"
console.log(location.state); // State passed with navigate()
```

### 3. `useParams()` - Get URL Parameters
```jsx
// Route: /product/:id
const { id } = useParams();
// useParams returns { id: "123" } when URL is /product/123
```

### 4. `Link` Component - Client-side Navigation
```jsx
<Link to="/wishlist">Go to Wishlist</Link>
// Doesn't cause full page reload - smooth navigation
```

## Server Configuration

The app uses Vite development server which handles client-side routing correctly.

**For production deployment**, ensure your server is configured to:
- Serve `index.html` for all routes
- Let React Router handle the routing on the client side

Example Vite config (already set up):
```javascript
// vite.config.js
export default {
  // This is already configured to work with React Router
  ...
}
```

## Troubleshooting

### Issue: Page reloads on navigation
**Solution:** Use `<Link>` or `navigate()` instead of `<a href="">`

### Issue: Route not found (404)
**Solution:** Check that route path matches exactly:
```jsx
// ✓ Correct
<Route path="/wishlist" element={<Wishlist />} />

// ✗ Incorrect (won't match /wishlist)
<Route path="/wishlist/" element={<Wishlist />} />
```

### Issue: useNavigate not working
**Solution:** Ensure component is inside `<BrowserRouter>`
```jsx
// ✓ Correct
<BrowserRouter>
  <MyComponent /> {/* Can use useNavigate here */}
</BrowserRouter>

// ✗ Incorrect
<MyComponent /> {/* useNavigate won't work here */}
<BrowserRouter> ... </BrowserRouter>
```

## Current Dev Setup

**Start command:** `npm run dev`
**Dev Server:** http://localhost:5173/
**Hot Module Reload:** ✅ Enabled

All routes are working and hot-reload is active for development!

## Next Steps

Optional enhancements you can add:

1. **Add 404 Page** - Route for unmatched paths
```jsx
<Route path="*" element={<NotFound />} />
```

2. **Add Route Transitions** - Smooth animations between pages
```jsx
// Use libraries like Framer Motion or react-transition-group
```

3. **Add Route Guards** - Protect routes (e.g., login required)
```jsx
import { Navigate } from "react-router-dom";

<Route path="/admin" element={isLoggedIn ? <Admin /> : <Navigate to="/" />} />
```

4. **Lazy Load Routes** - Code splitting for better performance
```jsx
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
```

---

**Status:** ✅ React Router fully configured and running!
**Development Server:** Running on http://localhost:5173/
