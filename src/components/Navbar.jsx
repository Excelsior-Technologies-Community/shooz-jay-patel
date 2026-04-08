import { useState } from "react";
import "./Navbar.css";

const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "Shop", href: "#", hasDropdown: true },
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Blog", href: "#", hasDropdown: true },
  { label: "Pages", href: "#", hasDropdown: true },
  { label: "Buy Now", href: "#", badge: "Sale" },
];

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

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          onClick={() => setMenuOpen((current) => !current)}
        >
          <MenuIcon open={menuOpen} />
        </button>

        <div className={`navbar__content ${menuOpen ? "navbar__content--open" : ""}`} id="site-navigation">
          <ul className="navbar__links">
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`navbar__item ${item.active ? "navbar__item--active" : ""} ${
                  item.badge ? "navbar__item--with-badge" : ""
                }`}
              >
                <a className="navbar__link" href={item.href}>
                  {item.badge ? <span className="navbar__tag">{item.badge}</span> : null}
                  <span >{item.label}</span>
                  {item.hasDropdown ? <ChevronDownIcon /> : null}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
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
      </div>
    </nav>
  );
}

export default Navbar;
