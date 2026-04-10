import "./ScrollingTextBar.css";

const offers = [
  "Enjoy 20% off your entire order with the code SHOEFRESH20",
  "Get 15% off your first purchase when you sign up for our newsletter. Use code NEWSHOES15",
  "Buy one pair of shoes, get the second pair 50% off. Use code BOGO50",
];

function ScrollingTextBar() {
  return (
    <section className="scrolling-text-bar" aria-label="Promotional offers">
      <div className="scrolling-text-bar__viewport">
        <div className="scrolling-text-bar__track">
          {Array.from({ length: 4 }).map((_, groupIndex) => (
            <div
              className="scrolling-text-bar__group"
              key={`scrolling-group-${groupIndex}`}
              aria-hidden={groupIndex === 0 ? undefined : "true"}
            >
              {offers.map((offer) => (
                <div className="scrolling-text-bar__item" key={`${groupIndex}-${offer}`}>
                  <span className="scrolling-text-bar__text">{offer}</span>
                  <span className="scrolling-text-bar__dot" aria-hidden="true" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollingTextBar;
