import "./Header.css";

function SocialIcon({ label, children }) {
  return (
    <a className="top-header__social-link" href="#" aria-label={label}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}

function Header() {
  return (
    <header className="top-header">
      <div className="top-header__inner">
        <p className="top-header__message">One Day Delivery Available</p>

        <div className="top-header__right">
          <nav className="top-header__auth" aria-label="Account links">
            <a href="#">Login</a>
            <span>/</span>
            <a href="#">Register</a>
          </nav>

          <div className="top-header__socials" aria-label="Social links">
            <SocialIcon label="Facebook">
              <path d="M13.5 8.5h2V5.25c-.35-.05-1.53-.15-2.9-.15-2.87 0-4.84 1.8-4.84 5.1V13H4.5v3.64h3.26V24h4V16.64h3.12l.5-3.64h-3.62V10.56c0-1.06.28-2.06 1.74-2.06Z" />
            </SocialIcon>
            <SocialIcon label="Twitter">
              <path d="M18.9 2H22l-6.77 7.73L23.2 22h-6.23l-4.88-7.38L5.63 22H2.5l7.23-8.27L1.8 2H8.2l4.42 6.78L18.9 2Zm-1.1 18h1.72L7.27 3.88H5.43L17.8 20Z" />
            </SocialIcon>
            <SocialIcon label="Instagram">
              <path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm-.17 1.92A3.11 3.11 0 0 0 3.92 7.03v9.94a3.11 3.11 0 0 0 3.11 3.11h9.94a3.11 3.11 0 0 0 3.11-3.11V7.03a3.11 3.11 0 0 0-3.11-3.11H7.03Zm10.63 1.44a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 1.92A2.88 2.88 0 1 0 14.88 12 2.88 2.88 0 0 0 12 9.12Z" />
            </SocialIcon>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
