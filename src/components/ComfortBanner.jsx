import "./ComfortBanner.css";

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="m13 7 6 5-6 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ComfortBanner() {
  return (
    <section className="comfort-banner" aria-labelledby="comfort-banner-title">
      <div className="comfort-banner__media" />
      <div className="comfort-banner__overlay" />

      <div className="comfort-banner__inner">
        <div className="comfort-banner__content">
          <p className="comfort-banner__eyebrow">Comfort Meets Fashion</p>
          <h2 className="comfort-banner__title" id="comfort-banner-title">
            <span>Discover shoes that look great</span>
            <span>and feel even better</span>
          </h2>
          <p className="comfort-banner__description">
            Our collection features comfortable and stylish footwear designed to keep your
            feet happy all day long.
          </p>
          <a className="comfort-banner__cta" href="#">
            <span>Shop Now</span>
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ComfortBanner;
