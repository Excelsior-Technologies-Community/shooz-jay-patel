const customerLogos = [
  "/text-logo-1.png",
  "/text-logo-2.png",
  "/text-logo-3.png",
  "/text-logo-5.png",
  "/text-logo-6.png",
  "/text-logo-7.png",
  "/text-logo-8.png",
  "/text-logo-9.png",
  "/text-logo-10.png",
  "/text-logo-11.png",
];

function CustomerFeedbackHighlights() {
  return (
    <section
      className="customer-feedback-highlights"
      aria-labelledby="customer-feedback-highlights-title"
    >
      <div className="customer-feedback-highlights__inner">
        <div className="customer-feedback-highlights__copy">
          <h2
            className="customer-feedback-highlights__title"
            id="customer-feedback-highlights-title"
          >
            Customer Feedback Highlights
          </h2>
          <p className="customer-feedback-highlights__description">
            Laoreet ridiculus congue magna malesuada phasellus condimentum taciti mus primis.
          </p>
        </div>

        <ul className="customer-feedback-highlights__grid" aria-label="Featured customer logos">
          {customerLogos.map((logo, index) => (
            <li className="customer-feedback-highlights__card" key={logo}>
              <img
                className="customer-feedback-highlights__logo"
                src={logo}
                alt=""
                aria-hidden="true"
                loading={index > 4 ? "lazy" : "eager"}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CustomerFeedbackHighlights;
