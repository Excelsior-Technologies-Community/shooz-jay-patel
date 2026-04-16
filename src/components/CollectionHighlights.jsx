const collectionCards = [
  {
    eyebrow: "Trending",
    titleLines: ["Men", "Collections"],
    image: "/grid-three-1.png",
    imagePosition: "center center",
  },
  {
    eyebrow: "Latest",
    titleLines: ["Women", "Collections"],
    image: "/grid-three-2.png",
    imagePosition: "center center",
  },
  {
    eyebrow: "Comfort",
    titleLines: ["Kid", "Collections"],
    image: "/grid-three-3.png",
    imagePosition: "center center",
  },
];

function CollectionHighlights() {
  return (
    <section className="collection-highlights" aria-label="Featured collections">
      <div className="collection-highlights__inner">
        {collectionCards.map((card) => (
          <a
            className="collection-highlights__card"
            href="#"
            key={`${card.eyebrow}-${card.titleLines.join("-")}`}
            style={{
              "--card-image": `url(${card.image})`,
              "--card-image-position": card.imagePosition,
            }}
          >
            <div className="collection-highlights__overlay" />
            <div className="collection-highlights__content">
              <span className="collection-highlights__eyebrow">{card.eyebrow}</span>
              <h2 className="collection-highlights__title">
                {card.titleLines.map((line) => (
                  <span className="collection-highlights__title-line" key={line}>
                    {line}
                  </span>
                ))}
              </h2>
              <span className="collection-highlights__cta">Shop Now</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CollectionHighlights;
