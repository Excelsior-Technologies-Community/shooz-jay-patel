const cards = [
  {
    eyebrow: "Shop By Brand",
    titleLines: ["Find your favorite", "brands and styles"],
    cta: "Shop Now",
    image: "/five-col-banner-4.webp",
    imagePosition: "center center",
  },
  {
    eyebrow: "Sale And Clearance",
    titleLines: ["Shop our latest deals", "and discounts"],
    cta: "Shop Now",
    image: "/five-col-banner-5.webp",
    imagePosition: "center center",
  },
];

function BrandDealsSection() {
  return (
    <section className="brand-deals" aria-label="Brand and sale promotions">
      <div className="brand-deals__inner">
        {cards.map((card) => (
          <a
            className="brand-deals__card"
            href="#"
            key={card.titleLines.join(" ")}
            style={{
              "--brand-deals-image": `url("${card.image}")`,
              "--brand-deals-position": card.imagePosition,
            }}
          >
            <div className="brand-deals__overlay" />
            <div className="brand-deals__content">
              <p className="brand-deals__eyebrow">{card.eyebrow}</p>
              <h2 className="brand-deals__title">
                {card.titleLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
              <span className="brand-deals__cta">{card.cta}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default BrandDealsSection;
