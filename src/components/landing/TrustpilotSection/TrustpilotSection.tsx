const reviews = [
  {
    title: "This company goes above and beyond for...",
    body: "This company goes above and beyond for their customers. They offer a great online chat that really helps you right away!",
  },
  {
    title: "New 1st time customer",
    body: "I have never used the pawnbroker service & felt very ashamed but all the staff were fantastic & supportive. They explained every aspect of the service clearly and made me feel really welcome.",
  },
  {
    title: "Went to the shop to exchange some money...",
    body: "Went to the shop to exchange some money as I'm on holiday with my husband and daughter, this was really easy and quick.",
  },
];

export function TrustpilotSection() {
  return (
    <section className="trustpilot" aria-label="Trustpilot reviews">
      <div className="trust-summary">
        <div className="trust-brand">
          <span className="trust-star">★</span>
          <strong>Trustpilot</strong>
        </div>
        <div className="trust-line" />
        <p>
          <strong>4.2</strong> Great
        </p>
      </div>
      <div className="review-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.title}>
            <div className="stars" aria-label="5 star rating">
              ★★★★★
            </div>
            <h2>{review.title}</h2>
            <p>{review.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
