import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import CategoryList from "./Category";

/* ─── DATA ─────────────────────────────────────────────── */
const products = [
  { id: 1,  name: "Breathable Mesh Slip-Ons",     brand: "AirWalk",      price: 25.00, originalPrice: null,  image: "/product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg",          collection: "Athletic Footwear",        inStock: true,  color: "Gray",     material: "Mesh"    },
  { id: 2,  name: "Chunky Platform Sandals",       brand: "BoldWalks",    price: 25.00, originalPrice: 32.00, image: "/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg",          collection: "Sandals & Slides",         inStock: true,  color: "Beige",    material: "Rubber"  },
  { id: 3,  name: "Classic White Tennis Sneakers", brand: "SportyFeet",   price: 25.00, originalPrice: null,  image: "/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.webp",         collection: "Sneakerhead's Haven",      inStock: true,  color: "White",    material: "Canvas"  },
  { id: 4,  name: "Cushioned Trail Running Shoes", brand: "TrailGear",    price: 15.00, originalPrice: null,  image: "/product-5_d3ebfc44-e7bd-4fa9-8459-4fc99b71cacf.webp",         collection: "Athletic Footwear",        inStock: true,  color: "Brown",    material: "Leather" },
  { id: 5,  name: "Elegant Block Heel Pumps",      brand: "LuxeFeet",     price: 15.00, originalPrice: null,  image: "/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg",          collection: "Luxury Leather Shoes",     inStock: true,  color: "Black",    material: "Leather" },
  { id: 6,  name: "Lightweight Running Trainers",  brand: "SprintMax",    price: 35.00, originalPrice: null,  image: "/product-11_a12147c9-4d7c-49e7-976a-690fea2264cd.jpg",         collection: "Athletic Footwear",        inStock: true,  color: "Blue",     material: "Mesh"    },
  { id: 7,  name: "Kids Velcro Sneakers",          brand: "CozySteps",    price: 20.00, originalPrice: null,  image: "/product-15_eeedf8cf-f93a-488c-9c0b-e62716ede97c.jpg",         collection: "Sneakerhead's Haven",      inStock: false, color: "Blue",     material: "Canvas"  },
  { id: 8,  name: "Classic Canvas Low-Tops",       brand: "UrbanStep",    price: 18.00, originalPrice: null,  image: "/product-16_e04d477d-efdc-4ec6-b50b-c2988e78b8a5.jpg",         collection: "Sneakerhead's Haven",      inStock: true,  color: "Red",      material: "Canvas"  },
  { id: 9,  name: "Slide Sandals",                 brand: "BoldWalks",    price: 30.00, originalPrice: null,  image: "/product-17.jpg",                                               collection: "Sandals & Slides",         inStock: false, color: "Black",    material: "Rubber"  },
  { id: 10, name: "High-Top Basketball Shoes",     brand: "TrailGear",    price: 110.00,originalPrice: null,  image: "/product-18_b63bf456-53dd-4c96-a994-753c3915d93c.jpg",         collection: "Sneakerhead's Haven",      inStock: true,  color: "Dark Blue","material": "Mesh"  },
  { id: 11, name: "Eco Knit Runners",              brand: "EcoStride",    price: 42.00, originalPrice: null,  image: "/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.webp",        collection: "Athletic Footwear",        inStock: true,  color: "Gray",     material: "Knit"    },
  { id: 12, name: "Retro Platform Sneakers",       brand: "RetroSole",    price: 55.00, originalPrice: 70.00, image: "/product-19_323f61e6-cfd6-4407-823a-273f154d188c.webp",        collection: "Sneakerhead's Haven",      inStock: true,  color: "Cream",    material: "Canvas"  },
  { id: 13, name: "Glam Stiletto Heels",           brand: "GlamStep",     price: 65.00, originalPrice: null,  image: "/product-22.webp",                                             collection: "Luxury Leather Shoes",     inStock: true,  color: "Magenta",  material: "Leather" },
  { id: 14, name: "Simply Comfort Flats",          brand: "SimplyShoes",  price: 28.00, originalPrice: null,  image: "/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.webp",        collection: "Luxury Leather Shoes",     inStock: true,  color: "Beige",    material: "Suede"   },
  { id: 15, name: "Pro Court Tennis Shoes",        brand: "ProSteps",     price: 75.00, originalPrice: null,  image: "/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg",         collection: "Athletic Footwear",        inStock: true,  color: "White",    material: "Mesh"    },
  { id: 16, name: "Trendy Ankle Boots",            brand: "TrendyFeet",   price: 88.00, originalPrice: null,  image: "/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27 (1).webp",    collection: "Boots for Every Occasion", inStock: true,  color: "Brown",    material: "Leather" },
  { id: 17, name: "Comfort Creek Walkers",         brand: "ComfortCreek", price: 60.00, originalPrice: null,  image: "/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg",          collection: "Boots for Every Occasion", inStock: false, color: "Dark Brown","material": "Leather"},
  { id: 18, name: "LuxeFeet Leather Loafers",      brand: "LuxeFeet",     price: 95.00, originalPrice: null,  image: "/product-5_d3ebfc44-e7bd-4fa9-8459-4fc99b71cacf.webp",         collection: "Luxury Leather Shoes",     inStock: true,  color: "Burgundy", material: "Leather" },
];

const COLLECTIONS = ["Athletic Footwear", "Boots for Every Occasion", "Luxury Leather Shoes", "Sandals & Slides", "Sneakerhead's Haven"];
const BRANDS      = ["AirWalk","BoldWalks","ComfortCreek","CozySteps","EcoStride","GlamStep","LuxeFeet","ProSteps","RetroSole","SimplyShoes","SportyFeet","SprintMax","TrailGear","TrendyFeet","UrbanStep"];
const COLORS = [
  { name: "Black",     hex: "#111111" },
  { name: "Blue",      hex: "#4169E1" },
  { name: "Brown",     hex: "#8B4513" },
  { name: "Beige",     hex: "#D2B48C" },
  { name: "Burgundy",  hex: "#800020" },
  { name: "Dark Blue", hex: "#1a237e" },
  { name: "Magenta",   hex: "#FF00FF" },
  { name: "Gray",      hex: "#808080" },
  { name: "Red",       hex: "#DC143C" },
  { name: "Cream",     hex: "#F5F5DC" },
  { name: "White",     hex: "#e0e0e0" },
  { name: "Dark Brown",hex: "#3E2723" },
];
const MATERIALS = [...new Set(products.map(p => p.material))].sort();
const SORT_OPTIONS = ["Alphabetically, A-Z","Alphabetically, Z-A","Price, Low to High","Price, High to Low"];

/* ─── COMPONENT ─────────────────────────────────────────── */
const FilterSlidebar = () => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [activeTab,           setActiveTab]           = useState(null);
  const [selCollections,      setSelCollections]      = useState([]);
  const [selBrands,           setSelBrands]           = useState([]);
  const [selColors,           setSelColors]           = useState([]);
  const [selMaterials,        setSelMaterials]        = useState([]);
  const [availFilter,         setAvailFilter]         = useState({ inStock: false, outOfStock: false });
  const [priceRange,          setPriceRange]          = useState([0, 200]);
  const [sortBy,              setSortBy]              = useState("Alphabetically, A-Z");
  const [viewCols,            setViewCols]            = useState(3);
  const [currentPage,         setCurrentPage]         = useState(1);

  // panel open/close
  const [colOpen,      setColOpen]      = useState(true);
  const [brandOpen,    setBrandOpen]    = useState(true);
  const [brandAll,     setBrandAll]     = useState(true);
  const [colorOpen,    setColorOpen]    = useState(true);
  const [colorAll,     setColorAll]     = useState(false);
  const [matOpen,      setMatOpen]      = useState(true);
  const [availOpen,    setAvailOpen]    = useState(true);
  const [priceOpen,    setPriceOpen]    = useState(true);

  const ITEMS_PER_PAGE = 9;

  /* toggles */
  const toggle = (setter) => (val) => {
    setter(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]);
    setCurrentPage(1);
  };
  const toggleCol  = toggle(setSelCollections);
  const toggleBrand= toggle(setSelBrands);
  const toggleColor= toggle(setSelColors);
  const toggleMat  = toggle(setSelMaterials);

  /* filter + sort */
  const filtered = products
    .filter(p => selCollections.length === 0 || selCollections.includes(p.collection))
    .filter(p => selBrands.length     === 0 || selBrands.includes(p.brand))
    .filter(p => selColors.length     === 0 || selColors.includes(p.color))
    .filter(p => selMaterials.length  === 0 || selMaterials.includes(p.material))
    .filter(p => {
      if (availFilter.inStock && availFilter.outOfStock) return true;
      if (availFilter.inStock)    return p.inStock;
      if (availFilter.outOfStock) return !p.inStock;
      return true;
    })
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === "Alphabetically, A-Z")  return a.name.localeCompare(b.name);
      if (sortBy === "Alphabetically, Z-A")  return b.name.localeCompare(a.name);
      if (sortBy === "Price, Low to High")   return a.price - b.price;
      if (sortBy === "Price, High to Low")   return b.price - a.price;
      return 0;
    });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated  = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const disc = (orig, curr) => orig ? Math.round((1 - curr / orig) * 100) : null;

  const handleAddToCart = (p) => addToCart({
    id: p.id, name: p.name, price: `$${p.price.toFixed(2)}`, image: p.image, brand: p.brand,
  });
  const handleWishlist = (p) => {
    if (isInWishlist(p.id)) removeFromWishlist(p.id);
    else addToWishlist({ id: p.id, name: p.name, price: `$${p.price.toFixed(2)}`, image: p.image, brand: p.brand });
  };

  /* helper: count how many filtered products match a value */
  const countFor = (field, val) => products.filter(p => p[field] === val).length;

  /* ── RENDER ── */
  return (
    <main className="fsp-page">
      {/* Hero */}
      <div className="hero-banner">
        <div className="hero-overlay"></div>
        <img src="/col-2.webp" alt="Shop" className="hero-background" />
        <div className="hero-content">
          <div className="hero-text"><h1 className="hero-title">Products</h1></div>
        </div>
      </div>

      {/* Category Tabs */}
      <CategoryList activeTab={activeTab} onTabClick={setActiveTab} />

      <div className="fsp-layout">

        {/* ── SIDEBAR ── */}
        <aside className="fsp-sidebar">
          <h2 className="fsp-sidebar__heading">Filter:</h2>

          {/* Collection */}
          <FilterGroup label="Collection" open={colOpen} onToggle={() => setColOpen(!colOpen)}>
            {COLLECTIONS.map(col => (
              <CheckItem key={col} label={col} count={countFor("collection", col)}
                checked={selCollections.includes(col)} onChange={() => toggleCol(col)} />
            ))}
          </FilterGroup>

          {/* Brand */}
          <FilterGroup label="Brand" open={brandOpen} onToggle={() => setBrandOpen(!brandOpen)}>
            {(brandAll ? BRANDS : BRANDS.slice(0, 5)).map(b => (
              <CheckItem key={b} label={b} count={countFor("brand", b)}
                checked={selBrands.includes(b)} onChange={() => toggleBrand(b)} />
            ))}
            {BRANDS.length > 5 && (
              <button className="fsp-filter-group__show-toggle" onClick={() => setBrandAll(!brandAll)}>
                {brandAll ? "- Show less" : `+ Show more`}
              </button>
            )}
          </FilterGroup>

          {/* Color */}
          <FilterGroup label="Color" open={colorOpen} onToggle={() => setColorOpen(!colorOpen)}>
            <div className="fsp-color-grid">
              {(colorAll ? COLORS : COLORS.slice(0, 7)).map(c => (
                <button key={c.name}
                  className={`fsp-color-swatch ${selColors.includes(c.name) ? "fsp-color-swatch--active" : ""}`}
                  style={{ backgroundColor: c.hex }}
                  onClick={() => toggleColor(c.name)}
                  title={c.name}
                />
              ))}
            </div>
            {COLORS.length > 7 && (
              <button className="fsp-filter-group__show-toggle" onClick={() => setColorAll(!colorAll)}>
                {colorAll ? "- Show less" : "+ Show more"}
              </button>
            )}
          </FilterGroup>

          {/* Material */}
          <FilterGroup label="Material" open={matOpen} onToggle={() => setMatOpen(!matOpen)}>
            {MATERIALS.map(m => (
              <CheckItem key={m} label={m} count={countFor("material", m)}
                checked={selMaterials.includes(m)} onChange={() => toggleMat(m)} />
            ))}
          </FilterGroup>

          {/* Availability */}
          <FilterGroup label="Availability" open={availOpen} onToggle={() => setAvailOpen(!availOpen)}>
            <CheckItem label="In stock"     count={products.filter(p => p.inStock).length}
              checked={availFilter.inStock}
              onChange={e => { setAvailFilter(f => ({ ...f, inStock: e.target.checked })); setCurrentPage(1); }} />
            <CheckItem label="Out of stock" count={products.filter(p => !p.inStock).length}
              checked={availFilter.outOfStock}
              onChange={e => { setAvailFilter(f => ({ ...f, outOfStock: e.target.checked })); setCurrentPage(1); }} />
          </FilterGroup>

          {/* Price */}
          <FilterGroup label="Price" open={priceOpen} onToggle={() => setPriceOpen(!priceOpen)}>
            <div className="fsp-price">
              <div className="fsp-price__track">
                <input type="range" min={0} max={200} value={priceRange[0]}
                  onChange={e => { setPriceRange([+e.target.value, priceRange[1]]); setCurrentPage(1); }}
                  className="fsp-price__range" />
                <input type="range" min={0} max={200} value={priceRange[1]}
                  onChange={e => { setPriceRange([priceRange[0], +e.target.value]); setCurrentPage(1); }}
                  className="fsp-price__range" />
              </div>
              <div className="fsp-price__inputs">
                <label>$ <input type="number" value={priceRange[0]}
                  onChange={e => { setPriceRange([+e.target.value, priceRange[1]]); setCurrentPage(1); }} /></label>
                <label>$ <input type="number" value={priceRange[1]}
                  onChange={e => { setPriceRange([priceRange[0], +e.target.value]); setCurrentPage(1); }} /></label>
              </div>
            </div>
          </FilterGroup>
        </aside>

        {/* ── PRODUCTS ── */}
        <section className="fsp-products">

          {/* Toolbar */}
          <div className="fsp-toolbar">
            <div className="fsp-toolbar__views">
              {[2, 3, 4].map(n => (
                <button key={n}
                  className={`fsp-toolbar__view-btn ${viewCols === n ? "fsp-toolbar__view-btn--active" : ""}`}
                  onClick={() => setViewCols(n)} title={`${n} columns`}>
                  {Array.from({ length: n }).map((_, i) => <span key={i} className="fsp-toolbar__bar" />)}
                </button>
              ))}
            </div>
            <div className="fsp-toolbar__sort">
              <span className="fsp-toolbar__sort-label">Sort By:</span>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="fsp-toolbar__sort-select">
                {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <span className="fsp-toolbar__count">{filtered.length} Products</span>
          </div>

          {/* Grid */}
          {paginated.length > 0 ? (
            <div className="fsp-grid" style={{ gridTemplateColumns: `repeat(${viewCols}, 1fr)` }}>
              {paginated.map(product => {
                const d = disc(product.originalPrice, product.price);
                const wishlisted = isInWishlist(product.id);
                return (
                  <div key={product.id} className="fsp-card">
                    <div className="fsp-card__img-wrap">
                      {!product.inStock && <span className="fsp-card__badge fsp-card__badge--sold">SOLD OUT</span>}
                      {d && <span className="fsp-card__badge">-{d}%</span>}
                      <img src={product.image} alt={product.name} className="fsp-card__img" />
                      {/* Hover actions */}
                      <div className="fsp-card__hover-actions">
                        <button className="fsp-card__hover-btn fsp-card__hover-btn--cart"
                          onClick={() => handleAddToCart(product)}
                          title="Add to Cart">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                          </svg>
                          Add to Cart
                        </button>
                        <button
                          className={`fsp-card__hover-btn fsp-card__hover-btn--wish ${wishlisted ? "active" : ""}`}
                          onClick={() => handleWishlist(product)}
                          title={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}>
                          <svg width="16" height="16" viewBox="0 0 24 24"
                            fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="fsp-card__body">
                      <div className="fsp-card__prices">
                        <span className="fsp-card__price">${product.price.toFixed(2)}</span>
                        {product.originalPrice && <span className="fsp-card__original">${product.originalPrice.toFixed(2)}</span>}
                      </div>
                      <h3 className="fsp-card__name">{product.name}</h3>
                      <p className="fsp-card__brand">{product.brand}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="fsp-empty">No products match the selected filters.</div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="fsp-pagination">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i}
                  className={`fsp-pagination__btn ${currentPage === i + 1 ? "fsp-pagination__btn--active" : ""}`}
                  onClick={() => setCurrentPage(i + 1)}>
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

/* ─── SMALL REUSABLE COMPONENTS ─────────────────────────── */
const FilterGroup = ({ label, open, onToggle, children }) => (
  <div className="fsp-filter-group">
    <button className="fsp-filter-group__toggle" onClick={onToggle}>
      <span>{label}</span>
      <span className={`fsp-chevron ${open ? "fsp-chevron--up" : ""}`}>&#8964;</span>
    </button>
    {open && <div className="fsp-filter-group__body">{children}</div>}
  </div>
);

const CheckItem = ({ label, count, checked, onChange }) => (
  <label className="fsp-filter-group__label">
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span>{label}</span>
    <span className="fsp-filter-group__count">({count})</span>
  </label>
);

export default FilterSlidebar;
