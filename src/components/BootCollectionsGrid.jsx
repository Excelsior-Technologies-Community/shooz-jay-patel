import "./BootCollectionsGrid.css";

const collectionCards = [
  {
    title: "Athletic Footwear",
    count: 8,
    image: "/col-5.webp",
    imagePosition: "center center",
    imageSize: "cover",
  },
  {
    title: "Luxury Leather Shoes",
    count: 8,
    image: "/col-6.webp",
    imagePosition: "center center",
    imageSize: "cover",
  },
  {
    title: "Sustainable Footwear",
    count: 8,
    image: "/col-1.webp",
    imagePosition: "center center",
    imageSize: "cover",
  },
  {
    title: "Sandals & Slides",
    count: 8,
    image: "/col-2.webp",
    imagePosition: "center center",
    imageSize: "cover",
  },
];

function BootCollectionsGrid() {
  return (
    <section className="boot-collections-grid" aria-label="Boot and footwear collections">
      <div className="boot-collections-grid__inner">
        {collectionCards.map((card) => (
          <a
            className="boot-collections-grid__card"
            href="#"
            key={card.title}
            style={{
              "--boot-card-image": `url(${card.image})`,
              "--boot-card-position": card.imagePosition,
              "--boot-card-size": card.imageSize,
            }}
          >
            <span className="boot-collections-grid__label">
              <span className="boot-collections-grid__title">{card.title}</span>
              <span className="boot-collections-grid__count">{card.count}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default BootCollectionsGrid;
