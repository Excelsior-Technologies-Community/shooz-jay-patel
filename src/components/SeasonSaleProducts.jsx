const productRows = [
  {
    id: "classic-white-tennis-sneakers",
    title: "Classic White Tennis Sneakers",
    price: "$25.00",
    image: "/product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg",
  },
  {
    id: "waterproof-hiking-boots",
    title: "Waterproof Hiking Boots",
    price: "$25.00",
    image: "/product-17.jpg",
  },
  {
    id: "classic-leather-sneakers",
    title: "Classic Leather Sneakers",
    price: "$21.00",
    image: "/product-22.webp",
  },
];

const columns = [
  { id: "column-1", items: productRows },
  { id: "column-2", items: productRows },
  { id: "column-3", items: productRows },
];

function SeasonSaleProducts() {
  return (
    <section className="season-sale-products" aria-labelledby="season-sale-products-title">
      <div className="season-sale-products__inner">
        <div className="season-sale-products__heading">
          <p className="season-sale-products__eyebrow">Season&apos;s End Sale</p>
          <h2 className="season-sale-products__title" id="season-sale-products-title">
            Huge discounts on last season&apos;s styles
          </h2>
          <p className="season-sale-products__description">
            Himenaeos nascetur tristique consequat mus ad. Accumsan fringilla in laoreet
            id bibendum et.
          </p>
        </div>

        <div className="season-sale-products__grid">
          {columns.map((column) => (
            <div className="season-sale-products__column" key={column.id}>
              {column.items.map((product) => (
                <a className="season-sale-products__item" href="#" key={`${column.id}-${product.id}`}>
                  <div className="season-sale-products__thumb">
                    <img src={product.image} alt={product.title} />
                  </div>

                  <div className="season-sale-products__meta">
                    <h3 className="season-sale-products__item-title">{product.title}</h3>
                    <span className="season-sale-products__price">{product.price}</span>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeasonSaleProducts;
