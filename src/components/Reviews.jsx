import { useState, useEffect, useRef } from 'react';

export default function Reviews() {
  // Reviews Slider State
  const [reviewIndex, setReviewIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [trackOffset, setTrackOffset] = useState(0);
  const reviewTrackRef = useRef(null);

  const reviewsList = [
    {
      author: "James T.",
      avatar: "/assets/avatar_james.png",
      meta: "Verified Buyer",
      stars: 5,
      text: "I've noticed a huge improvement in my energy and focus since I started using Voltigen Fish Oil. Highly recommended!"
    },
    {
      author: "Sarah M.",
      avatar: "/assets/avatar_sarah.png",
      meta: "Verified Buyer",
      stars: 5,
      text: "Great quality products! Voltigen Complete is my go-to for daily nutrition and immunity support."
    },
    {
      author: "Michael R.",
      avatar: "/assets/avatar_michael.png",
      meta: "Verified Buyer",
      stars: 5,
      text: "Clean ingredients and no aftertaste. Voltigen is now a part of my daily routine."
    },
    {
      author: "Rohan Sharma",
      initials: "RS",
      meta: "Local Guide • 18 reviews",
      stars: 5,
      text: "I've been using Voltigen Multivitamin for over a month now. My midday fatigue is completely gone, and I feel significantly more focused during long meetings. Highly recommended!"
    },
    {
      author: "Arjun Mehta",
      initials: "AM",
      meta: "Local Guide • 31 reviews",
      stars: 5,
      text: "Pure Omega-3 without any fishy aftertaste. I've noticed a significant improvement in my joint flexibility after workouts and much better focus. Molecularly distilled quality really shows."
    },
    {
      author: "Priya Patel",
      initials: "PP",
      meta: "Verified Buyer",
      stars: 5,
      text: "Best daily multivitamin I've tried. Usually, supplements upset my stomach, but this organic formula is extremely gentle. My immunity and overall energy levels are great."
    }
  ];

  // Responsive logic for Reviews Carousel
  useEffect(() => {
    const getCardsPerPageValue = () => {
      if (window.innerWidth <= 768) return 1;
      if (window.innerWidth <= 1024) return 2;
      return 3;
    };

    const handleResize = () => {
      setCardsPerPage(getCardsPerPageValue());
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // run on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate sliding translation offset for review track
  useEffect(() => {
    if (reviewTrackRef.current && reviewTrackRef.current.children.length > 0) {
      const cardWidth = reviewTrackRef.current.children[0].getBoundingClientRect().width;
      const offsetValue = reviewIndex * (cardWidth + 24); // cardWidth + 24px gap
      setTrackOffset(offsetValue);
    }
  }, [reviewIndex, cardsPerPage]);

  // Constrain Slider Dot count
  const totalCards = reviewsList.length;
  const maxSliderIndex = totalCards - cardsPerPage;
  const activeDotIndex = Math.min(Math.max(0, reviewIndex), maxSliderIndex);

  const dotsList = [];
  for (let i = 0; i <= maxSliderIndex; i++) {
    dotsList.push(i);
  }

  return (
    <section className="reviews-section" id="reviews">
      <h2 className="reviews-main-title">WHAT OUR CUSTOMERS SAY</h2>
      <div className="reviews-carousel-wrapper">
        <div
          className="reviews-track"
          id="reviews-track"
          ref={reviewTrackRef}
          style={{ transform: `translateX(-${trackOffset}px)` }}
        >
          {reviewsList.map((rev, idx) => (
            <div key={idx} className="review-card">
              <div>
                <div className="review-stars">
                  {[...Array(rev.stars)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="review-content">"{rev.text}"</p>
              </div>
              <div className="review-author-info">
                {rev.avatar ? (
                  <img src={rev.avatar} alt={rev.author} className="review-avatar" />
                ) : (
                  <div className="review-avatar-initials">{rev.initials}</div>
                )}
                <div className="review-meta">
                  <span className="review-author-name">{rev.author}</span>
                  <span className="review-buyer-status">{rev.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="reviews-dots" id="reviews-dots">
        {dotsList.map((dotIdx) => (
          <button
            key={dotIdx}
            className={`review-dot ${dotIdx === activeDotIndex ? 'active' : ''}`}
            onClick={() => setReviewIndex(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
