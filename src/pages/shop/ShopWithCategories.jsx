import React from "react";
import { Link } from "react-router-dom";
import CategoryList from "./Category";

const ShopWithCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Athletic Footwear",
      image: "/col-1.webp",
      link: "/collections/athletic-footwear",
    },
    {
      id: 2,
      name: "Boots for Every Occasion",
      image: "/col-2.webp",
      link: "/collections/boots-for-every-occasion",
    },
    {
      id: 3,
      name: "Luxury Leather Shoes",
      image: "/col-3.webp",
      link: "/collections/luxury-leather-shoes",
    },
    {
      id: 4,
      name: "Sandals & Slides",
      image: "/col-4.webp",
      link: "/collections/summer-sandals-slides",
    },
    {
      id: 5,
      name: "Sneakerhead's Haven",
      image: "/col-5.webp",
      link: "/collections/frontpage",
    },
  ];

  return (
    <main className="shop-with-categories-page">
      {/* Hero Banner Section */}
      <div className="hero-banner">
        <div className="hero-overlay"></div>
        <img 
          src="/col-2.webp" 
          alt="Shop Banner" 
          className="hero-background"
        />
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Products</h1>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <CategoryList />

      {/* Category Grid Section */}
      <section className="swc-grid-section">
        <div className="swc-grid">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.link}
              className={`swc-card swc-card--${index % 2 === 0 ? 'tall' : 'short'}`}
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="swc-card__overlay"></div>
              <div className="swc-card__content">
                <h3 className="swc-card__title">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ShopWithCategories;
