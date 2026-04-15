import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "./Navbar.css";

const navItems = [
  { id: "home", label: "Home", path: "/", active: true },
  { id: "shop", label: "Shop", hasDropdown: true, megaMenu: "shop" },
  { id: "product", label: "Product", hasDropdown: true, megaMenu: "product" },
  { id: "blog", label: "Blog", hasDropdown: true, megaMenu: "blog" },
  { id: "pages", label: "Pages", hasDropdown: true, dropdownMenu: "pages" },
  { id: "buy-now", label: "Buy Now", path: "/sale", badge: "Sale" },
];

const dropdownMenus = {
  pages: [
    { label: "About Us 1", path: "/about-us-1" },
    { label: "About Us 2", path: "/about-us-2" },
    { label: "About Us 3", path: "/about-us-3" },
    { label: "Contact", path: "/contact" },
    { label: "Faqs", path: "/faqs" },
    { label: "Lookbook", path: "/lookbook" },
    { label: "Size Guide", path: "/sizeguide" },
    { label: "Wishlist", path: "/wishlist" },
  ],
};

const megaMenus = {
  shop: {
    variant: "promo-grid",
    columns: [
      {
        title: "Layout",
        links: [
          { label: "Filter Sidebar", path: "/shop" },
          { label: "Filter Top", path: "/shop?filter=top" },
          { label: "Filter Drawer", path: "/shop?filter=drawer" },
          { label: "Without Filter", path: "/shop?filter=none" },
          { label: "Collection - 2 columns", path: "/collections?cols=2" },
          { label: "Collection - 3 columns", path: "/collections?cols=3" },
          { label: "Collection - 4 columns", path: "/collections?cols=4" },
        ],
      },
      {
        title: "Features",
        links: [
          { label: "Banner Image", path: "/shop?banner=image" },
          { label: "Banner No Image", path: "/shop?banner=none" },
          { label: "Banner Split", path: "/shop?banner=split" },
          { label: "Collection list", path: "/collections" },
          { label: "Sub Collection", path: "/collections/subcollection" },
          { label: "Pagination", path: "/shop?pagination=true" },
          { label: "Infinity", path: "/shop?pagination=infinite" },
          { label: "Load More", path: "/shop?pagination=loadmore" },
        ],
      },
      {
        title: "Hover Style",
        links: [
          { label: "Hover Style 1", path: "/products?style=1" },
          { label: "Hover Style 2", path: "/products?style=2" },
          { label: "Hover Style 3", path: "/products?style=3" },
          { label: "Hover Style 4", path: "/products?style=4" },
          { label: "Hover Style 5", path: "/products?style=5" },
          { label: "Hover Style 6", path: "/products?style=6" },
          { label: "Hover Style 7", path: "/products?style=7" },
          { label: "Hover Style 8", path: "/products?style=8" },
        ],
      },
    ],
    promos: [
      {
        title: "Athletic Footwear",
        products: 8,
        image: "/col-5.webp",
        path: "/collections/athletic-footwear",
      },
      {
        title: "Boots for Every Occasion",
        products: 8,
        image: "/col-4.webp",
        path: "/collections/boots",
      },
    ],
  },
  product: {
    variant: "featured-product",
    columns: [
      {
        title: "Product Layouts",
        links: [
          "1. Thumbnails - bottom",
          "2. Thumbnails - left",
          "3. Thumbnails - right",
          "4. Without Thumbnails",
          "5. List - stacked",
          "6. List - grid",
          "7. Collage - style 1",
          "8. Collage - style 2",
        ],
      },
      {
        title: "Product Type",
        links: [
          "Simple Product",
          "Variable Product",
          "With Video",
          "Sold Out - Coming",
        ],
      },
      {
        title: "List Featured 1",
        links: [
          "Sticky ATC",
          "Frequently Bought Together",
          "Count Down",
          "Cross Selling",
          "Upsell Popup",
          "Low Stock Alert",
          "Pickup Store",
        ],
      },
      {
        title: "List Featured 2",
        links: [
          "Dropdown Variant",
          "Swatch Variant Color",
          "Swatch Variant Image",
          "Variant Image Square",
          "Size Guide",
          "Description Accordion",
          "Description Tab Center",
        ],
      },
    ],
    featuredProduct: {
      price: "$25.00",
      title: "Waterproof Hiking Boots",
      brand: "TrailGear",
      image: "/product-17.jpg",
    },
  },
  blog: {
    variant: "editorial",
    columns: [
      {
        title: "List Layout",
        links: [
          "List Left Sidebar",
          "List Right Sidebar",
          "List Item Basic",
          "List Item Overlay",
          "List Item Box",
          "List Item Classic",
          "List Item Classic Box",
        ],
      },
      {
        title: "Grid Layout",
        links: [
          "Grid Left Sidebar",
          "Grid Right Sidebar",
          "Grid Item Basic",
          "Grid Item Overlay",
          "Grid Item Box",
          "Grid Item Classic",
        ],
      },
      {
        title: "Article",
        links: [
          "Title in image",
          "Title after image",
          "Title before image",
          "Left Sidebar",
          "Right Sidebar",
          "Title Center",
          "Article Video",
        ],
      },
    ],
    editorialCard: {
      image: "/wide-banner.png",
      title: "Enjoy a 50% Price Slash",
      copy: "Revamp Your Wardrobe at Jaw-Dropping Prices.",
      cta: "Shop Now",
    },
  },
};

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M5.5 7.75 10 12.25l4.5-4.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="11"
        cy="11"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m16.5 16.5 3.75 3.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="8"
        r="3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5 19c1.9-3 4.5-4.5 7-4.5s5.1 1.5 7 4.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 20.25 4.78 13.4a4.66 4.66 0 0 1 0-6.68 4.8 4.8 0 0 1 6.77 0L12 7.18l.45-.46a4.8 4.8 0 0 1 6.77 0 4.66 4.66 0 0 1 0 6.68Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.5 8.5h11l-.75 11h-9.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9 9V7a3 3 0 0 1 6 0v2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {open ? (
        <>
          <path
            d="M6 6 18 18"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
          <path
            d="M18 6 6 18"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </>
      ) : (
        <>
          <path
            d="M4.5 7.5h15"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
          <path
            d="M4.5 12h15"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
          <path
            d="M4.5 16.5h15"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </>
      )}
    </svg>
  );
}

function IconButton({ label, count, children, suffix, onClick }) {
  return (
    <button className="navbar__icon-button" type="button" aria-label={label} onClick={onClick}>
      <span className="navbar__icon">{children}</span>
      {typeof count === "number" && <span className="navbar__icon-badge">{count}</span>}
      {suffix ? <span className="navbar__icon-suffix">{suffix}</span> : null}
    </button>
  );
}

function MegaMenu({ menu, mobileOpen }) {
  const isFeaturedProductMenu = menu.variant === "featured-product";
  const isEditorialMenu = menu.variant === "editorial";

  return (
    <div
      className={`navbar__mega-menu ${mobileOpen ? "navbar__mega-menu--open" : ""} ${
        isFeaturedProductMenu
          ? "navbar__mega-menu--product"
          : isEditorialMenu
            ? "navbar__mega-menu--editorial"
            : "navbar__mega-menu--shop"
      }`}
    >
      <div
        className={`navbar__mega-columns ${
          isFeaturedProductMenu
            ? "navbar__mega-columns--product"
            : isEditorialMenu
              ? "navbar__mega-columns--editorial"
              : ""
        }`}
      >
        {menu.columns.map((column) => (
          <div className="navbar__mega-group" key={column.title}>
            <p className="navbar__mega-heading">{column.title}</p>
            <ul className="navbar__mega-list">
              {column.links.map((link) => (
                <li key={link.path || link.label}>
                  <Link to={link.path || "#"}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {isFeaturedProductMenu ? (
        <Link to={menu.featuredProduct.path || "#"} className="navbar__featured-product">
          <div className="navbar__featured-product-image-wrap">
            <img src={menu.featuredProduct.image} alt={menu.featuredProduct.title} />
          </div>
          <span className="navbar__featured-product-price">{menu.featuredProduct.price}</span>
          <span className="navbar__featured-product-title">{menu.featuredProduct.title}</span>
          <span className="navbar__featured-product-brand">{menu.featuredProduct.brand}</span>
        </Link>
      ) : isEditorialMenu ? (
        <Link to={menu.editorialCard.path || "#"} className="navbar__editorial-card">
          <div className="navbar__editorial-card-image-wrap">
            <img src={menu.editorialCard.image} alt={menu.editorialCard.title} />
          </div>
          <span className="navbar__editorial-card-title">{menu.editorialCard.title}</span>
          <span className="navbar__editorial-card-copy">{menu.editorialCard.copy}</span>
          <span className="navbar__editorial-card-cta">{menu.editorialCard.cta}</span>
        </Link>
      ) : (
        <div className="navbar__mega-promos">
          {menu.promos.map((promo) => (
            <Link to={promo.path || "#"} key={promo.title} className="navbar__promo-card">
              <div className="navbar__promo-image-wrap">
                <img src={promo.image} alt={promo.title} />
              </div>
              <span className="navbar__promo-title">{promo.title}</span>
              <span className="navbar__promo-meta">{promo.products} products</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function DropdownMenu({ links, mobileOpen }) {
  return (
    <div className={`navbar__dropdown-menu ${mobileOpen ? "navbar__dropdown-menu--open" : ""}`}>
      <ul className="navbar__dropdown-list">
        {links.map((link) => (
          <li key={link.path || link.label}>
            <Link to={link.path || "#"}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Navbar({ onOpenCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const { getTotalItems } = useCart();
  const { wishlistItems } = useWishlist();
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    if (menuOpen) {
      setOpenMenu(null);
    }

    setMenuOpen((current) => !current);
  };

  const handleMenuToggleByKey = (menuKey) => {
    if (window.matchMedia("(max-width: 1200px)").matches) {
      setOpenMenu((current) => (current === menuKey ? null : menuKey));
    }
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" aria-label="Shooz home">
          <img src="/logo.png" alt="Shooz" />
        </Link>

        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={handleMenuToggle}
        >
          <MenuIcon open={menuOpen} />
        </button>

        <div className={`navbar__center ${menuOpen ? "navbar__center--open" : ""}`} id="site-navigation">
          <ul className="navbar__links">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`navbar__item ${item.active ? "navbar__item--active" : ""} ${
                  item.badge ? "navbar__item--with-badge" : ""
                } ${item.megaMenu ? "navbar__item--mega" : ""} ${
                  item.dropdownMenu ? "navbar__item--dropdown" : ""
                }`}
              >
                {item.megaMenu ? (
                  <>
                    <button
                      className="navbar__link navbar__link-button"
                      type="button"
                      aria-expanded={openMenu === item.megaMenu}
                      aria-haspopup="true"
                      onClick={() => handleMenuToggleByKey(item.megaMenu)}
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon />
                    </button>
                    <MegaMenu menu={megaMenus[item.megaMenu]} mobileOpen={openMenu === item.megaMenu} />
                  </>
                ) : item.dropdownMenu ? (
                  <>
                    <button
                      className="navbar__link navbar__link-button"
                      type="button"
                      aria-expanded={openMenu === item.dropdownMenu}
                      aria-haspopup="true"
                      onClick={() => handleMenuToggleByKey(item.dropdownMenu)}
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon />
                    </button>
                    <DropdownMenu
                      links={dropdownMenus[item.dropdownMenu]}
                      mobileOpen={openMenu === item.dropdownMenu}
                    />
                  </>
                ) : (
                  <Link to={item.path || "#"} className="navbar__link">
                    {item.badge ? <span className="navbar__tag">{item.badge}</span> : null}
                    <span>{item.label}</span>
                    {item.hasDropdown ? <ChevronDownIcon /> : null}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={`navbar__actions ${menuOpen ? "navbar__actions--open" : ""}`}>
          <IconButton label="Search">
            <SearchIcon />
          </IconButton>
          <IconButton label="Account">
            <UserIcon />
          </IconButton>
          <IconButton 
            label="Wishlist" 
            count={wishlistItems.length}
            onClick={() => navigate("/wishlist")}
          >
            <HeartIcon />
          </IconButton>
          <IconButton 
            label="Shopping bag" 
            count={getTotalItems()}
            onClick={onOpenCart}
          >
            <BagIcon />
          </IconButton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
