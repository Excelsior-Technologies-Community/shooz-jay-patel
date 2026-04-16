import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Step Into Style",
    titleLines: ["Discover The Latest", "Trends In Footwear"],
    descriptionLines: [
      "From classic sneakers to trendy boots, our",
      "collection has something for everyone.",
    ],
    image: "/banner-1.png",
    imagePosition: "left center",
    position: "right",
  },
  {
    eyebrow: "Elevate Your Look",
    titleLines: ["Find The Perfect Pair", "Of Shoes To Complete."],
    descriptionLines: [
      "Explore our wide range of styles, colors, and",
      "materials to find the perfect shoes for any occasion.",
    ],
    image: "/banner-2.png",
    imagePosition: "center center",
    position: "right",
  },
  {
    eyebrow: "Comfort Meets Fashion",
    titleLines: ["Discover Shoes That Look", "Great And Feel Even Better."],
    descriptionLines: [
      "Our collection features comfortable and stylish footwear",
      "designed to keep your feet happy all day long.",
    ],
    image: "/banner-3.png",
    imagePosition: "center center",
    position: "left",
  },
];

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

function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const compareCount = 0;

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [activeSlide]);

  useEffect(() => {
    if (!isCompareOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsCompareOpen(false);
      }
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isCompareOpen]);

  return (
    <section className="hero-slider" aria-label="Featured shoe collections">
      <div className="hero-slider__stage">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;

          return (
            <article
              key={slide.titleLines.join(" ")}
              className={`hero-slide hero-slide--${slide.position} ${
                isActive ? "hero-slide--active" : ""
              }`}
              aria-hidden={!isActive}
            >
              <div
                className="hero-slide__media"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: slide.imagePosition,
                }}
              />
              <div className={`hero-slide__overlay hero-slide__overlay--${slide.position}`} />

              <div className="hero-slide__inner">
                <div className={`hero-slide__content hero-slide__content--${slide.position}`}>
                  <p className="hero-slide__eyebrow">{slide.eyebrow}</p>

                  <h1 className="hero-slide__title">
                    {slide.titleLines.map((line) => (
                      <span className="hero-slide__title-line" key={line}>
                        {line}
                      </span>
                    ))}
                  </h1>

                  <p className="hero-slide__description">
                    {slide.descriptionLines.map((line) => (
                      <span className="hero-slide__description-line" key={line}>
                        {line}
                      </span>
                    ))}
                  </p>

                  <a className="hero-slide__cta" href="#">
                    <span>Shop Now</span>
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </article>
          );
        })}

        <div className="hero-slider__dots" aria-label="Choose a featured slide">
          {slides.map((slide, dotIndex) => (
            <button
              key={slide.titleLines.join(" ")}
              className={`hero-slider__dot ${
                dotIndex === activeSlide ? "hero-slider__dot--active" : ""
              }`}
              type="button"
              aria-label={`Show slide ${dotIndex + 1}`}
              aria-pressed={dotIndex === activeSlide}
              onClick={() => setActiveSlide(dotIndex)}
            />
          ))}
        </div>

        <button
          className="hero-slider__compare"
          type="button"
          aria-label="Compare items"
          onClick={() => setIsCompareOpen(true)}
        >
          <span className="hero-slider__compare-text">Compare</span>
          <span className="hero-slider__compare-count">{compareCount}</span>
        </button>
      </div>

      {isCompareOpen ? (
        <div
          className="hero-slider__modal-backdrop"
          role="presentation"
          onClick={() => setIsCompareOpen(false)}
        >
          <div
            className="hero-slider__modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="compare-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="hero-slider__modal-close"
              type="button"
              aria-label="Close compare popup"
              onClick={() => setIsCompareOpen(false)}
            >
              ×
            </button>

            <div className="hero-slider__modal-body">
              <p className="hero-slider__modal-title" id="compare-modal-title">
                Compare products
              </p>
              <div className="hero-slider__modal-empty">
                <div className="hero-slider__modal-alert" role="status" aria-live="polite">
                  There are no products in the comparison list!
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default HeroSlider;
