import { useState } from "react";
import "./FeaturedProducts.css";

const tabs = [
  { id: "featured", label: "Featured" },
  { id: "new-arrivals", label: "New Arrivals" },
  { id: "best-seller", label: "Best Seller" },
];

const productsByTab = {
  featured: [
    {
      id: "classic-white-tennis-sneakers",
      title: "Classic White Tennis Sneakers",
      brand: "SportyFeet",
      price: "$25.00",
      primaryImage: "/product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg",
      secondaryImage: "/product-16_e04d477d-efdc-4ec6-b50b-c2988e78b8a5.jpg",
    },
    {
      id: "waterproof-hiking-boots",
      title: "Waterproof Hiking Boots",
      brand: "TrailGear",
      price: "$25.00",
      primaryImage: "/product-17.jpg",
      secondaryImage: "/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg",
      swatches: ["#0b162b", "#111111", "#050505"],
      countdown: { days: "1644", hours: "21", mins: "29", secs: "30" },
    },
    {
      id: "classic-leather-sneakers",
      title: "Classic Leather Sneakers",
      brand: "UrbanStep",
      price: "$21.00",
      primaryImage: "/product-22.webp",
      secondaryImage: "/product-18_b63bf456-53dd-4c96-a994-753c3915d93c.jpg",
    },
    {
      id: "high-top-canvas-sneakers",
      title: "High-Top Canvas Sneakers",
      brand: "TrendyFeet",
      price: "$25.00",
      primaryImage: "/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.webp",
      secondaryImage: "/product-15_eeedf8cf-f93a-488c-9c0b-e62716ede97c.jpg",
    },
  ],
  "new-arrivals": [
    {
      id: "everyday-running-shoes",
      title: "Everyday Running Shoes",
      brand: "MotionLab",
      price: "$24.00",
      primaryImage: "/product-18_b63bf456-53dd-4c96-a994-753c3915d93c.jpg",
      secondaryImage: "/product-22.webp",
    },
    {
      id: "street-court-lows",
      title: "Street Court Lows",
      brand: "Courtline",
      price: "$23.00",
      primaryImage: "/product-17.jpg",
      secondaryImage: "/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg",
      swatches: ["#0b162b", "#8b572a", "#111111"],
      countdown: { days: "1644", hours: "21", mins: "15", secs: "18" },
    },
    {
      id: "athletic-knit-runners",
      title: "Athletic Knit Runners",
      brand: "SprintCore",
      price: "$19.00",
      primaryImage: "/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg",
      secondaryImage: "/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.webp",
    },
    {
      id: "mono-sport-trainers",
      title: "Mono Sport Trainers",
      brand: "UrbanStep",
      price: "$22.00",
      primaryImage: "/product-15_eeedf8cf-f93a-488c-9c0b-e62716ede97c.jpg",
      secondaryImage: "/product-16_e04d477d-efdc-4ec6-b50b-c2988e78b8a5.jpg",
    },
  ],
  "best-seller": [
    {
      id: "trail-peak-hikers",
      title: "Trail Peak Hikers",
      brand: "TrailGear",
      price: "$25.00",
      primaryImage: "/product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg",
      secondaryImage: "/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg",
    },
    {
      id: "navy-city-sole",
      title: "Navy City Sole",
      brand: "TrailGear",
      price: "$25.00",
      primaryImage: "/product-17.jpg",
      secondaryImage: "/product-11_a12147c9-4d7c-49e7-976a-690fea2264cd.jpg",
      swatches: ["#0b162b", "#111111", "#050505"],
      countdown: { days: "1644", hours: "21", mins: "28", secs: "15" },
    },
    {
      id: "mesh-performance-shoes",
      title: "Mesh Performance Shoes",
      brand: "UrbanStep",
      price: "$21.00",
      primaryImage: "/product-22.webp",
      secondaryImage: "/product-18_b63bf456-53dd-4c96-a994-753c3915d93c.jpg",
    },
    {
      id: "classic-black-runners",
      title: "Classic Black Runners",
      brand: "TrendyFeet",
      price: "$25.00",
      primaryImage: "/product-16_e04d477d-efdc-4ec6-b50b-c2988e78b8a5.jpg",
      secondaryImage: "/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.webp",
    },
  ],
};

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 4h2l2.1 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.76L20 7H7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
      <circle cx="10" cy="19" r="1.35" fill="currentColor" />
      <circle cx="17" cy="19" r="1.35" fill="currentColor" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M2.5 12s3.5-5.5 9.5-5.5S21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 20.2 4.8 13.4a4.7 4.7 0 0 1 0-6.7 4.8 4.8 0 0 1 6.8 0l.4.5.4-.5a4.8 4.8 0 0 1 6.8 0 4.7 4.7 0 0 1 0 6.7Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CompareIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 7h12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="m15 3 4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M17 17H5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="m9 13-4 4 4 4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("featured");
  const products = productsByTab[activeTab];

  return (
    <section className="featured-products" aria-labelledby="featured-products-title">
      <div className="featured-products__inner">
        <div className="featured-products__tabs" role="tablist" aria-label="Product categories">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`featured-products__tab ${
                activeTab === tab.id ? "featured-products__tab--active" : ""
              }`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="featured-products__grid">
          {products.map((product) => (
            <article className="featured-products__card" key={product.id}>
              <a className="featured-products__media" href="#">
                <img
                  className="featured-products__image featured-products__image--primary"
                  src={product.primaryImage}
                  alt={product.title}
                />
                <img
                  className="featured-products__image featured-products__image--secondary"
                  src={product.secondaryImage}
                  alt={product.title}
                />

                {product.countdown ? (
                  <div className="featured-products__countdown" aria-label="Offer countdown">
                    <span>
                      <strong>{product.countdown.days}</strong>
                      <small>Days</small>
                    </span>
                    <span>
                      <strong>{product.countdown.hours}</strong>
                      <small>Hours</small>
                    </span>
                    <span>
                      <strong>{product.countdown.mins}</strong>
                      <small>Mins</small>
                    </span>
                    <span>
                      <strong>{product.countdown.secs}</strong>
                      <small>Secs</small>
                    </span>
                  </div>
                ) : null}
              </a>

              <div className="featured-products__body">
                {product.swatches ? (
                  <div className="featured-products__swatches" aria-label="Available colors">
                    {product.swatches.map((swatchColor, index) => (
                      <span
                        className={`featured-products__swatch ${
                          index === 0 ? "featured-products__swatch--active" : ""
                        }`}
                        key={`${product.id}-${swatchColor}`}
                      >
                        <span
                          className="featured-products__swatch-fill"
                          style={{ backgroundColor: swatchColor }}
                        />
                      </span>
                    ))}
                  </div>
                ) : null}

                <p className="featured-products__price">{product.price}</p>
                <h3 className="featured-products__title">
                  <a href="#">{product.title}</a>
                </h3>
                <p className="featured-products__brand">{product.brand}</p>

                <div className="featured-products__actions">
                  <button className="featured-products__add" type="button">
                    <CartIcon />
                    <span>Add To Cart</span>
                  </button>

                  <div className="featured-products__icons">
                    <button type="button" aria-label="Quick view">
                      <EyeIcon />
                    </button>
                    <button type="button" aria-label="Add to wishlist">
                      <HeartIcon />
                    </button>
                    <button type="button" aria-label="Compare">
                      <CompareIcon />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
