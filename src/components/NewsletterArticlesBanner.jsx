import "./NewsletterArticlesBanner.css";

function NewsletterArticlesBanner() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="newsletter-articles-banner" aria-labelledby="newsletter-articles-banner-title">
      <div className="newsletter-articles-banner__inner">
        <div className="newsletter-articles-banner__panel">
          <div className="newsletter-articles-banner__content">
            <h2
              className="newsletter-articles-banner__title"
              id="newsletter-articles-banner-title"
            >
              Subscribe To Our News Articals
            </h2>

            <form className="newsletter-articles-banner__form" onSubmit={handleSubmit}>
              <label className="newsletter-articles-banner__sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                className="newsletter-articles-banner__input"
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Your email"
                autoComplete="email"
              />
              <button className="newsletter-articles-banner__button" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="newsletter-articles-banner__image-wrap">
          <img
            className="newsletter-articles-banner__image"
            src="/newslatter-image.jpg"
            alt="Close-up of a colorful sneaker inside a modern shoe store"
          />
        </div>
      </div>
    </section>
  );
}

export default NewsletterArticlesBanner;
