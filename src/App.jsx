import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

function App() {
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);

  const handleOpenCart = () => setIsCartSidebarOpen(true);
  const handleCloseCart = () => setIsCartSidebarOpen(false);

  return (
    <Router>
      {/* ✅ Header (Navbar) */}
      <Header onOpenCart={handleOpenCart} />

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      {/* ✅ Footer */}
      <Footer />

      {/* ✅ Cart Sidebar - Available on all pages */}
      <CartSidebar isOpen={isCartSidebarOpen} onClose={handleCloseCart} />
    </Router>
  );
}

export default App;
