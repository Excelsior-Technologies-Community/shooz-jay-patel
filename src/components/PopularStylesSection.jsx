import { useId } from "react";

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
  const textPathId = `popular-styles-${useId().replace(/:/g, "")}-text-path`;

  return (
    <button className="popular-styles__play" type="button" aria-label="Play video">
      <span className="popular-styles__sr-only">Play video</span>

      <svg viewBox="0 0 120 120" className="popular-styles__play-text" aria-hidden="true">
        <defs>
          <path
            d="M 60,60 m -54,0 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0"
            id={textPathId}
          />
        </defs>

        <text>
          <textPath startOffset="0" xlinkHref={`#${textPathId}`}>
            SHOOZ STYLE STORE SHOOZ STYLE STORE
          </textPath>
        </text>
      </svg>

      <span className="popular-styles__play-icon-wrap" aria-hidden="true">
        <span className="popular-styles__play-mark" />
        <span className="popular-styles__play-button-circle" />
        <span className="popular-styles__play-button-triangle" />
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

        <div className="popular-styles__media">
          <div className="popular-styles__panel popular-styles__panel--left" aria-hidden="true">
            <div className="popular-styles__image popular-styles__image--left" />
          </div>

          <PlayBadge />

          <div className="popular-styles__panel popular-styles__panel--right" aria-hidden="true">
            <div className="popular-styles__image popular-styles__image--right" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularStylesSection;
