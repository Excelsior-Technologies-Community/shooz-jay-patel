import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AnnouncementBar from "./components/AnnouncementBar";
import BrandDealsSection from "./components/BrandDealsSection";
import BootCollectionsGrid from "./components/BootCollectionsGrid";
import CollectionHighlights from "./components/CollectionHighlights";
import BootsHeading from "./components/BootsHeading";
import ComfortBanner from "./components/ComfortBanner";
import CustomerFeedbackHighlights from "./components/CustomerFeedbackHighlights";
import FashionSneakersSection from "./components/FashionSneakersSection";
import FeaturedProducts from "./components/FeaturedProducts";
import Header from "./components/header";
import HeroSlider from "./components/HeroSlider";
import Navbar from "./components/Navbar";
import NewsletterArticlesBanner from "./components/NewsletterArticlesBanner";
import ScrollingTextBar from "./components/ScrollingTextBar";
import PopularStylesSection from "./components/PopularStylesSection";
import RecentlyOurPosts from "./components/RecentlyOurPosts";
import SeasonSaleProducts from "./components/SeasonSaleProducts";
import SectionHeading from "./components/SectionHeading";
import SiteFooter from "./components/SiteFooter";
import StoreFinderBanner from "./components/StoreFinderBanner";
import CartSidebar from "./components/CartSidebar";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import FilterSidebar from "./pages/filtersidebar";
import filtersidebar from "./pages/filtersidebar";

// Layout Component - Shared across all pages
function Layout({ children, onOpenCart }) {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <Navbar onOpenCart={onOpenCart} />
      {children}
      <SiteFooter />
    </div>
  );
}

// Home Page
function HomePage({ onOpenCart }) {
  return (
    <Layout onOpenCart={onOpenCart}>
      <HeroSlider />
      <CollectionHighlights />
      <SectionHeading />
      <FeaturedProducts />
      <ComfortBanner />
      <ScrollingTextBar />
      <BootsHeading />
      <BootCollectionsGrid />
      <FashionSneakersSection />
      <BrandDealsSection />
      <SeasonSaleProducts />
      <PopularStylesSection />
      <StoreFinderBanner />
      <CustomerFeedbackHighlights />
      
      <RecentlyOurPosts />
      <NewsletterArticlesBanner />
    </Layout>
  );
}

// Cart Page
function CartPageRoute({ onOpenCart }) {
  return (
    <Layout onOpenCart={onOpenCart}>
      <Cart />
    </Layout>
  );
}

// Wishlist Page
function WishlistPageRoute({ onOpenCart }) {
  return (
    <Layout onOpenCart={onOpenCart}>
      <Wishlist />
    </Layout>
  );
}

// Filter Sidebar / Shop Page
function ShopPageRoute({ onOpenCart }) {
  return (
    <Layout onOpenCart={onOpenCart}>
      <FilterSidebar />
    </Layout>
  );
}

// 404 Not Found Page
function NotFoundPage() {
  return (
    <Layout onOpenCart={() => {}}>
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/" style={{ color: "#1a1a1a", textDecoration: "underline" }}>
          Go back to home
        </a>
      </div>
    </Layout>
  );
}

function App() {
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);

  const handleOpenCart = () => setIsCartSidebarOpen(true);
  const handleCloseCart = () => setIsCartSidebarOpen(false);

  return (
    <>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<HomePage onOpenCart={handleOpenCart} />} />
        <Route
          path="/cart"
          element={<CartPageRoute onOpenCart={handleOpenCart} />}
        />
        <Route
          path="/wishlist"
          element={<WishlistPageRoute onOpenCart={handleOpenCart} />}
        />
        <Route
          path="/shop"
          element={<ShopPageRoute onOpenCart={handleOpenCart} />}
        />
        <Route
          path="/filterside"
          element={<ShopPageRoute onOpenCart={filtersidebar} />}
        />

        {/* 404 Route - must be last */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Cart Sidebar - Available on all pages */}
      <CartSidebar isOpen={isCartSidebarOpen} onClose={handleCloseCart} />
    </>
  );
}

export default App;
