import "./StoreFinderBanner.css";

function StoreFinderBanner() {
  return (
    <section className="store-finder-banner" aria-label="Store finder promotion">
      <div className="store-finder-banner__inner">
        <p className="store-finder-banner__text">
          Discover Our Stores: Your Local Shoe Haven
        </p>

        <a className="store-finder-banner__button" href="#">
          Find Store
        </a>
      </div>
    </section>
  );
}

export default StoreFinderBanner;
