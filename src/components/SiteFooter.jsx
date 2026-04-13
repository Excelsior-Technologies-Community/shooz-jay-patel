import "./SiteFooter.css";

const informationLinks = [
  "About Us",
  "Privacy Policy",
  "Returns Policy",
  "Shipping Policy",
  "Terms & Conditions",
];

const quickLinks = ["My Account", "My Cart", "Size Chart", "Wishlist", "Gift Card"];

const categoryLinks = [
  "Athletic Footwear",
  "Boots for Every Occasion",
  "Luxury Leather Shoes",
  "Sandals & Slides",
  "Sneakerhead's Haven",
];

const supportLinks = ["Contact Us", "Newsletter", "Gift Cards", "Sign In", "My Account"];

const paymentBadges = [
  { label: "AMEX", tone: "blue" },
  { label: "Apple Pay", tone: "white" },
  { label: "DINERS", tone: "sky" },
  { label: "DISCOVER", tone: "orange" },
  { label: "JCB", tone: "green" },
  { label: "Mastercard", tone: "gold" },
  { label: "VISA", tone: "navy" },
];

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 18V6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="m7.5 10.5 4.5-4.5 4.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function FooterLinkList({ title, links }) {
  return (
    <div className="site-footer__group">
      <h3 className="site-footer__heading">{title}</h3>
      <ul className="site-footer__list">
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer__top">
        <FooterLinkList title="Infomation" links={informationLinks} />
        <FooterLinkList title="Quick Links" links={quickLinks} />

        <div className="site-footer__brand-block">
          <a className="site-footer__brand" href="/" aria-label="Shooz home">
            <img src="/logo.png" alt="Shooz" />
          </a>
          <p className="site-footer__contact-line">T: + (08) 9055 0269</p>
          <p className="site-footer__contact-line">E: example@example.com</p>
          <p className="site-footer__contact-line">
            50 Porana Place, West Casuarinas,
            <br />
            Western Australia, Australia.
          </p>
        </div>

        <FooterLinkList title="Categories" links={categoryLinks} />
        <FooterLinkList title="Support" links={supportLinks} />
      </div>

      <div className="site-footer__bottom">
        <p className="site-footer__copyright">
          Copyright &copy; 2024 <a href="/">Shooz</a>. All rights reserved
        </p>

        <div className="site-footer__bottom-actions">
          <ul className="site-footer__payments" aria-label="Accepted payment methods">
            {paymentBadges.map((badge) => (
              <li key={badge.label}>
                <span className={`site-footer__payment site-footer__payment--${badge.tone}`}>
                  {badge.label}
                </span>
              </li>
            ))}
          </ul>

          <button
            className="site-footer__back-to-top"
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
          >
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
