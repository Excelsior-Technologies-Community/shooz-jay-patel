import { useState } from "react";
import "./Navbar.css";

const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "Shop", href: "#", hasDropdown: true, megaMenu: true },
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Blog", href: "#", hasDropdown: true },
  { label: "Pages", href: "#", hasDropdown: true },
  { label: "Buy Now", href: "#", badge: "Sale" },
];

const shopMegaMenu = {
  columns: [
    {
      title: "Layout",
      links: [
        "1. Filter Sidebar",
        "2. Filter Top",
        "3. Filter Drawer",
        "4. Without Filter",
        "5. Collection - 2 columns",
        "6. Collection - 3 columns",
        "7. Collection - 4 columns",
      ],
    },
    {
      title: "Features",
      links: [
        "Banner Image",
        "Banner No Image",
        "Banner Split",
        "Collection list",
        "Sub Collection",
        "Pagination",
        "Infinity",
        "Load More",
      ],
    },
    {
      title: "Hover Style",
      links: [
        "Hover Style 1",
        "Hover Style 2",
        "Hover Style 3",
        "Hover Style 4",
        "Hover Style 5",
        "Hover Style 6",
        "Hover Style 7",
        "Hover Style 8",
      ],
    },
  ],
  promos: [
    {
      title: "Athletic Footwear",
      products: 8,
      image: "/public/col-5.webp",
    },
    {
      title: "Boots for Every Occasion",
      products: 8,
      image: "/public/col-4.webp",
    },
  ],
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

function IconButton({ label, count, children, suffix }) {
  return (
    <button className="navbar__icon-button" type="button" aria-label={label}>
      <span className="navbar__icon">{children}</span>
      {typeof count === "number" && <span className="navbar__icon-badge">{count}</span>}
      {suffix ? <span className="navbar__icon-suffix">{suffix}</span> : null}
    </button>
  );
}

function ShopMegaMenu({ mobileOpen }) {
  return (
    <div className={`navbar__mega-menu ${mobileOpen ? "navbar__mega-menu--open" : ""}`}>
      <div className="navbar__mega-columns">
        {shopMegaMenu.columns.map((column) => (
          <div className="navbar__mega-group" key={column.title}>
            <p className="navbar__mega-heading">{column.title}</p>
            <ul className="navbar__mega-list">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="navbar__mega-promos">
        {shopMegaMenu.promos.map((promo) => (
          <a className="navbar__promo-card" href="#" key={promo.title}>
            <div className="navbar__promo-image-wrap">
              <img src={promo.image} alt={promo.title} />
            </div>
            <span className="navbar__promo-title">{promo.title}</span>
            <span className="navbar__promo-meta">{promo.products} products</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    if (menuOpen) {
      setShopMenuOpen(false);
    }

    setMenuOpen((current) => !current);
  };

  const handleShopToggle = () => {
    if (window.matchMedia("(max-width: 1200px)").matches) {
      setShopMenuOpen((current) => !current);
    }
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner">
        <a className="navbar__brand" href="/" aria-label="Shooz home">
          <img src="/logo.png" alt="Shooz" />
        </a>

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
                key={item.label}
                className={`navbar__item ${item.active ? "navbar__item--active" : ""} ${
                  item.badge ? "navbar__item--with-badge" : ""
                } ${item.megaMenu ? "navbar__item--mega" : ""}`}
              >
                {item.megaMenu ? (
                  <>
                    <button
                      className="navbar__link navbar__link-button"
                      type="button"
                      aria-expanded={shopMenuOpen}
                      aria-haspopup="true"
                      onClick={handleShopToggle}
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon />
                    </button>
                    <ShopMegaMenu mobileOpen={shopMenuOpen} />
                  </>
                ) : (
                  <a className="navbar__link" href={item.href}>
                    {item.badge ? <span className="navbar__tag">{item.badge}</span> : null}
                    <span>{item.label}</span>
                    {item.hasDropdown ? <ChevronDownIcon /> : null}
                  </a>
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
          <IconButton label="Wishlist" count={0}>
            <HeartIcon />
          </IconButton>
          <IconButton label="Shopping bag" suffix="(0)">
            <BagIcon />
          </IconButton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
