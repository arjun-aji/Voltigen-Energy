import { useState, useEffect } from 'react';
import { productsData, whatsAppBookingBase, multivitaminBookingText, fishoilBookingText } from '../data/products';

export default function ProductModal({ activeProductId, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isChangingImage, setIsChangingImage] = useState(false);

  useEffect(() => {
    setCurrentImageIndex(0);
    setIsChangingImage(false);
  }, [activeProductId]);

  // Modal body scroll lock and escape listener
  useEffect(() => {
    if (activeProductId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeProductId) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProductId, onClose]);

  const activeProduct = activeProductId ? productsData[activeProductId] : null;
  const imagesList = activeProduct ? (activeProduct.images || [activeProduct.image]) : [];

  const handlePrevImage = () => {
    if (imagesList.length <= 1) return;
    setIsChangingImage(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
      setIsChangingImage(false);
    }, 150);
  };

  const handleNextImage = () => {
    if (imagesList.length <= 1) return;
    setIsChangingImage(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imagesList.length);
      setIsChangingImage(false);
    }, 150);
  };

  return (
    <div className={`modal-overlay ${activeProduct ? 'active' : ''}`} id="product-modal" onClick={(e) => e.target.id === 'product-modal' && onClose()}>
      {activeProduct && (
        <div className="modal-container">
          <button className="modal-close-btn" id="modal-close" aria-label="Close details" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="modal-content">
            <div className="modal-left">
              <div className="modal-img-container">
                <button className="modal-nav-btn prev-btn" id="modal-prev-btn" aria-label="Previous image" onClick={handlePrevImage}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <img
                  src={imagesList[currentImageIndex]}
                  alt={`Voltigen ${activeProduct.title}`}
                  id="modal-product-img"
                  className={`modal-product-img ${isChangingImage ? 'changing' : ''}`}
                />
                <button className="modal-nav-btn next-btn" id="modal-next-btn" aria-label="Next image" onClick={handleNextImage}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
            <div className="modal-right">
              <h3 className="modal-product-title" id="modal-product-title">{activeProduct.title}</h3>
              <p className="modal-product-subtitle" id="modal-product-subtitle">{activeProduct.subtitle}</p>
              <div className="modal-price-row">
                <span className="modal-price-old"><span className="price-label">MRP</span> {activeProduct.price}</span>
                <span className="modal-offer-price"><span className="price-label">Offer</span> {activeProduct.offerPrice}</span>
              </div>
              <div className="modal-divider"></div>
              <p className="modal-product-description" id="modal-product-desc">
                {activeProduct.description}
              </p>
              <div className="modal-details-grid">
                <div className="modal-detail-item">
                  <span className="detail-label">Servings:</span>
                  <span className="detail-value" id="modal-product-servings">{activeProduct.servings}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="detail-label">Usage:</span>
                  <span className="detail-value" id="modal-product-usage">{activeProduct.usage}</span>
                </div>
              </div>
              <div className="modal-features-list" id="modal-product-features">
                {activeProduct.features.map((feat, index) => (
                  <div key={index} className="modal-feature-row">
                    <div className="modal-feature-icon-wrapper">
                      {feat.icon}
                    </div>
                    <div className="modal-feature-info">
                      <span className="modal-feature-label">{feat.label}</span>
                      <span className="modal-feature-text">{feat.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Book Now WhatsApp Button */}
              <div className="modal-action-row">
                <a
                  href={`${whatsAppBookingBase}${activeProductId === 'multivitamin' ? multivitaminBookingText : fishoilBookingText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 01 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  <span>Book Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Product Reviews Section */}
          <div className="modal-reviews-section">
            <h4 className="modal-reviews-title">Customer Reviews</h4>
            <div className="modal-reviews-container" id="modal-product-reviews">
              {activeProduct.reviews.map((rev, index) => (
                <div key={index} className="google-review-card">
                  <div className="review-header">
                    <div className="reviewer-avatar">{rev.avatar}</div>
                    <div className="reviewer-info">
                      <span className="reviewer-name">{rev.author}</span>
                      <span className="reviewer-meta">{rev.meta}</span>
                    </div>
                  </div>
                  <div className="review-rating-row">
                    <div className="google-stars">
                      {'★'.repeat(rev.stars)}{'☆'.repeat(5 - rev.stars)}
                    </div>
                    <span className="review-date">{rev.date}</span>
                  </div>
                  <p className="review-text">"{rev.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
