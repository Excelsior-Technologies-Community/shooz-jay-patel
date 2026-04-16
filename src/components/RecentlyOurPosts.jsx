const featuredPost = {
  title: "The Future Of Footwear: A Look Ahead",
  date: "Oct 28 2024",
  comments: "0 comments",
  image: "/blog-6.webp",
  alt: "Athlete balancing on a soccer ball while wearing white sneakers",
};

const secondaryPosts = [
  {
    title: "Eco-Friendly Footwear: Sustainable Style",
    date: "Oct 28 2024",
    comments: "0 comments",
    image: "/blog-2.webp",
    alt: "Runner holding track shoes on a running track",
  },
  {
    title: "The Ultimate Guide to Sneaker Care",
    date: "Oct 17 2024",
    comments: "0 comments",
    image: "/blog-1.avif",
    alt: "A collection of colorful sneakers arranged on sand",
  },
  {
    title: "How to Style Your Favorite Sneakers",
    date: "Oct 17 2024",
    comments: "0 comments",
    image: "/blog-5.avif",
    alt: "Person tying blue sneakers before a workout",
  },
];

function CommentIcon() {
  return (
    <svg
      aria-hidden="true"
      className="recently-our-posts__comment-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 15a3 3 0 0 1-3 3H8l-4 3v-3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3Z" />
      <path d="M8 10h8" />
      <path d="M8 14h5" />
    </svg>
  );
}

function PostMeta({ date, comments, light = false }) {
  return (
    <div className={`recently-our-posts__meta${light ? " recently-our-posts__meta--light" : ""}`}>
      <span>{date}</span>
      <span className="recently-our-posts__comments">
        <CommentIcon />
        {comments}
      </span>
    </div>
  );
}

function RecentlyOurPosts() {
  return (
    <section className="recently-our-posts" aria-labelledby="recently-our-posts-title">
      <div className="recently-our-posts__inner">
        <header className="recently-our-posts__header">
          <p className="recently-our-posts__eyebrow">FROM THE BLOG</p>
          <h2 className="recently-our-posts__title" id="recently-our-posts-title">
            Recently Our Posts
          </h2>
          <p className="recently-our-posts__description">
            Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
          </p>
        </header>

        <div className="recently-our-posts__layout">
          <article className="recently-our-posts__featured">
            <a className="recently-our-posts__featured-link" href="#">
              <img
                className="recently-our-posts__featured-image"
                src={featuredPost.image}
                alt={featuredPost.alt}
              />
              <div className="recently-our-posts__featured-overlay" />
              <div className="recently-our-posts__featured-content">
                <PostMeta date={featuredPost.date} comments={featuredPost.comments} light />
                <h3 className="recently-our-posts__featured-title">{featuredPost.title}</h3>
              </div>
            </a>
          </article>

          <div className="recently-our-posts__list" aria-label="More blog posts">
            {secondaryPosts.map((post) => (
              <article className="recently-our-posts__post" key={post.title}>
                <a className="recently-our-posts__post-link" href="#">
                  <img className="recently-our-posts__post-image" src={post.image} alt={post.alt} />
                  <div className="recently-our-posts__post-copy">
                    <PostMeta date={post.date} comments={post.comments} />
                    <h3 className="recently-our-posts__post-title">{post.title}</h3>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentlyOurPosts;
