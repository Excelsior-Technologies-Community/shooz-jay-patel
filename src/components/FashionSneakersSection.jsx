const cards = [
  {
    eyebrow: "Comfort Meets Fashion",
    titleLines: ["Discover shoes", "that look great"],
    image: "/five-col-banner-1.webp",
    imagePosition: "center center",
  },
  {
    eyebrow: "Elevate Your Look",
    titleLines: ["Find the perfect pair of", "shoes"],
    image: "/five-col-banner-2.webp",
    imagePosition: "center center",
  },
  {
    eyebrow: "Step Into Style",
    titleLines: ["The latest trends in", "footwear"],
    image: "/five-col-banner-3.webp",
    imagePosition: "center center",
  },
];

function FashionSneakersSection() {
  return (
    <section className="fashion-sneakers" aria-labelledby="fashion-sneakers-title">
      <div className="fashion-sneakers__inner">
        <div className="fashion-sneakers__heading">
          <p className="fashion-sneakers__eyebrow">Fashion Sneakers</p>
          <h2 className="fashion-sneakers__title" id="fashion-sneakers-title">
            Timeless styles for everyday wear
          </h2>
          <p className="fashion-sneakers__description">
            High-performance footwear for sports and workouts
          </p>
        </div>

        <div className="fashion-sneakers__grid">
          {cards.map((card) => (
            <a
              className="fashion-sneakers__card"
              href="#"
              key={card.titleLines.join(" ")}
              style={{
                "--fashion-card-image": `url(${card.image})`,
                "--fashion-card-position": card.imagePosition,
              }}
            >
              <div className="fashion-sneakers__card-overlay" />
              <div className="fashion-sneakers__card-content">
                <p className="fashion-sneakers__card-eyebrow">{card.eyebrow}</p>
                <h3 className="fashion-sneakers__card-title">
                  {card.titleLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
                <span className="fashion-sneakers__card-cta">Shop Now</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FashionSneakersSection;
