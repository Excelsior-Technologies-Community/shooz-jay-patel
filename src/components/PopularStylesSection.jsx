import "./PopularStylesSection.css";

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

function PlayBadge() {
  return (
    <button className="popular-styles__play" type="button" aria-label="Play showcase video">
      <svg
        className="popular-styles__play-text"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <path
            d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
            id="popular-styles-play-path"
          />
        </defs>
        <text>
          <textPath href="#popular-styles-play-path" startOffset="0%">
            Fashion Store Style
          </textPath>
        </text>
      </svg>

      <span className="popular-styles__play-circle">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9 7 8 5-8 5V7Z" fill="currentColor" />
        </svg>
      </span>
    </button>
  );
}

function PopularStylesSection() {
  return (
    <section className="popular-styles" aria-labelledby="popular-styles-title">
      <div className="popular-styles__inner">
        <div className="popular-styles__content">
          <p className="popular-styles__eyebrow">Our Most Popular Styles</p>

          <h2 className="popular-styles__title" id="popular-styles-title">
            <span>Save big on shoes</span>
            <span>from last season</span>
          </h2>

          <p className="popular-styles__description">
            Morbi natoque id finibus natoque sapien turpis elementum maximus. Sociosqu
            auctor a urna consequat laoreet nisi accumsan magna. Adipiscing vulputate
            nec euismod, a aliquam enim. Mi facilisi ex est habitant lacus sagittis
            vitae.
          </p>

          <p className="popular-styles__description popular-styles__description--secondary">
            Molestie dolor mus vitae penatibus sed lectus convallis ut neque. Leo
            elementum euismod penatibus cras sociosqu aliquet tellus.
          </p>

          <a className="popular-styles__cta" href="#">
            <span>Shop Now</span>
            <ArrowRightIcon />
          </a>
        </div>

        <div className="popular-styles__media" aria-hidden="true">
          <div className="popular-styles__panel popular-styles__panel--left">
            <img src="/video-pic.webp" alt="" />
          </div>

          <div className="popular-styles__panel popular-styles__panel--right">
            <img src="/video-pic.webp" alt="" />
          </div>

          <PlayBadge />
        </div>
      </div>
    </section>
  );
}

export default PopularStylesSection;
