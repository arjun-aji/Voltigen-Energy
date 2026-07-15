import { useState, useEffect, useRef } from 'react';

// Product Details Database
const productsData = {
  multivitamin: {
    title: "Multivitamin",
    subtitle: "Daily Health & Vitality",
    price: "Rs 00.00",
    image: "/assets/multivitamin.png",
    images: ["/assets/multivitamin.png", "/assets/multivitaminback.png"],
    description: "Fuel Your Performance. Protect Your Health. Missing out on vital nutrients can drain your energy and slow you down. Voltigen Multivitamin is your ultimate daily defense, engineered to bridge nutritional gaps, supercharge your immune system, and fuel your everyday vitality. Featuring a high-potency blend of 30 essential nutrients, it delivers complete, premium daily nutrition support in one convenient bottle. Whether you are crushing professional goals, keeping up with a demanding lifestyle, or pushing your limits in training, Voltigen provides the foundational fuel your body needs to thrive.",
    servings: "90 Servings (90 Tablets)",
    usage: "Take 1 tablet daily with water, or as directed by a healthcare expert.",
    features: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        ),
        label: 'Energy Boost',
        text: 'Optimizes natural vitality and cellular ATP'
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        ),
        label: 'Immune Guard',
        text: 'High-strength defense support for seasonal health'
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        ),
        label: 'Cell Vitality',
        text: 'Promotes general longevity and overall well-being'
      }
    ],
    reviews: [
      {
        author: "Rohan Sharma",
        avatar: "R",
        meta: "Local Guide • 18 reviews",
        stars: 5,
        date: "2 weeks ago",
        text: "I've been using Voltigen Multivitamin for over a month now. My midday fatigue is completely gone, and I feel significantly more focused during long meetings. Highly recommended!"
      },
      {
        author: "Priya Patel",
        avatar: "P",
        meta: "Verified Buyer",
        stars: 5,
        date: "1 month ago",
        text: "Best daily multivitamin I've tried. Usually, supplements upset my stomach, but this organic formula is extremely gentle. My immunity and overall energy levels are great."
      }
    ]
  },
  fishoil: {
    title: "Fish Oil",
    subtitle: "Premium Omega-3",
    price: "Rs 00.00",
    image: "/assets/fishoil.png",
    images: ["/assets/fishoil.png", "/assets/fishoilback.png"],
    description: "Voltigen 3x Strength Omega-3 Fish Oil is a premium, high-potency dietary supplement designed to deliver maximum cardiovascular, joint, and cognitive support. Each bottle contains 90 premium softgels packed with an impressive 1250 mg of purified fish oil per serving, yielding an industry-leading 540 mg of EPA and 360 mg of DHA. Engineered for superior absorption and ultimate daily wellness, this ultra-pure formula provides the essential fatty acids your body needs to fuel peak physical performance, protect your heart, and sharpen mental clarity.",
    servings: "90 Premium Softgels",
    usage: "Take 1 to 3 softgels daily with a meal, or as directed by a healthcare professional.",
    features: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        ),
        label: 'Cardio Care',
        text: 'Supports healthy heart and circulation'
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        ),
        label: 'Cognitive Fuel',
        text: 'Enhances focus, memory, and cognitive agility'
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="1"></circle>
            <path d="M9 20a1 1 0 1 0 2 0v-4h2v4a1 1 0 1 0 2 0v-6L12 9l-3 5v6z"></path>
          </svg>
        ),
        label: 'Joint Relief',
        text: 'Reduces exercise-induced soreness and supports mobility'
      }
    ],
    reviews: [
      {
        author: "Arjun Mehta",
        avatar: "A",
        meta: "Local Guide • 31 reviews",
        stars: 5,
        date: "3 days ago",
        text: "Pure Omega-3 without any fishy aftertaste. I've noticed a significant improvement in my joint flexibility after workouts and much better focus. Molecularly distilled quality really shows."
      },
      {
        author: "Sneha Rao",
        avatar: "S",
        meta: "Verified Buyer",
        stars: 5,
        date: "1 month ago",
        text: "Amazing purity! My doctor recommended high EPA/DHA for heart health, and Voltigen fits the bill perfectly. Easy to swallow and clean packaging."
      }
    ]
  }
};

// QaItem subcomponent to capture dynamic accordion scrollHeight logic
function QaItem({ question, answer, isOpen, onToggle }) {
  const answerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isOpen && answerRef.current) {
      setMaxHeight(`${answerRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className={`qa-item ${isOpen ? 'active' : ''}`}>
      <button 
        className="qa-trigger" 
        aria-expanded={isOpen ? "true" : "false"}
        onClick={onToggle}
      >
        <span>{question}</span>
        <span className="qa-icon-plus">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </span>
      </button>
      <div 
        ref={answerRef} 
        className="qa-answer" 
        style={{ maxHeight }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function App() {
  // Preloader State
  const [isLoaded, setIsLoaded] = useState(false);

  // Sticky Header state
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Active section state
  const [activeSection, setActiveSection] = useState('HOME');

  // Modal State
  const [activeProductId, setActiveProductId] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isChangingImage, setIsChangingImage] = useState(false);

  // Reviews Slider State
  const [reviewIndex, setReviewIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [trackOffset, setTrackOffset] = useState(0);
  const reviewTrackRef = useRef(null);

  // Q&A accordion index state
  const [activeQaIndex, setActiveQaIndex] = useState(null);

  // Contact Form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  // Preloader timeout effect
  useEffect(() => {
    document.body.classList.add('loading');
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.classList.remove('loading');
    }, 1800);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading');
    };
  }, []);

  // Sticky Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Modal body scroll lock and escape listener
  useEffect(() => {
    if (activeProductId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeProductId) {
        setActiveProductId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProductId]);

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

  // Handle active navigation click
  const handleNavLinkClick = (sectionName) => {
    setActiveSection(sectionName);
    setIsMenuOpen(false);
  };

  // Open product details modal
  const handleOpenDetails = (productId) => {
    setActiveProductId(productId);
    setCurrentImageIndex(0);
    setIsChangingImage(false);
  };

  // Close details modal
  const handleCloseDetails = () => {
    setActiveProductId(null);
  };

  // Modal gallery navigations
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

  // Handle Q&A Accordion clicks
  const handleQaToggle = (index) => {
    setActiveQaIndex((prev) => (prev === index ? null : index));
  };

  // Handle support contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    fetch("https://formsubmit.co/ajax/voltigenind@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: contactName,
        email: contactEmail,
        message: contactMessage,
        _subject: `New Support Request from ${contactName}`
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success === "true" || data.success === true) {
          alert(`Thank you, ${contactName}! Your question has been submitted successfully to our scientific team. We will get back to you shortly.`);
          setContactName('');
          setContactEmail('');
          setContactMessage('');
        } else {
          alert("Oops! Something went wrong. Please try again or email us directly at voltigenind@gmail.com.");
        }
      })
      .catch(error => {
        console.error("Error submitting form:", error);
        alert("Oops! Something went wrong. Please try again or email us directly at voltigenind@gmail.com.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  // Navigation Links configuration
  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'PRODUCTS', href: '#essentials' },
    { name: 'THE SCIENCE', href: '#science' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'Q&A', href: '#qa' },
    { name: 'SUPPORT', href: '#support' }
  ];

  // Review Track Configuration
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

  // Q&A Configuration
  const qaList = [
    {
      question: "Why should I take dietary supplements?",
      answer: "Voltigen supplements are designed to fill key nutritional gaps in your daily diet, support heart and brain health, and boost overall energy levels and immune function."
    },
    {
      question: "Are Voltigen supplements suitable for vegans or vegetarians?",
      answer: "Our Daily Multivitamin is vegetarian-friendly. Our Ultra Pure Fish Oil contains omega-3 fatty acids derived from premium fish oil source. All ingredients are clearly detailed on labels and backed by transparent third-party certifications."
    },
    {
      question: "Can I take multiple supplements together?",
      answer: "Yes, our products are formulated to be taken as a perfectly complementary pairing. Consuming them together supports enhanced vitamin absorption and general physical performance, particularly when taken alongside your meals."
    },
    {
      question: "Can I take supplements with medications or other dietary products?",
      answer: "We always recommend consulting your healthcare provider before combining supplements with prescribed medications. This helps avoid potential interactions and ensures safe, spaced-out consumption."
    },
    {
      question: "What is the recommended daily dosage for your supplements?",
      answer: "For best results, follow the dosage guidelines printed on each package label. Do not exceed the recommended daily intake. We advise taking supplements with plenty of water during a regular meal."
    },
    {
      question: "Are your supplements tested for quality and purity?",
      answer: "Absolutely. All Voltigen products are formulated using premium ingredients that undergo rigorous third-party testing. They are guaranteed free from heavy metals and manufactured in certified, state-of-the-art facilities."
    }
  ];

  // Constrain Slider Dot count
  const totalCards = reviewsList.length;
  const maxSliderIndex = totalCards - cardsPerPage;
  const activeDotIndex = Math.min(Math.max(0, reviewIndex), maxSliderIndex);

  const dotsList = [];
  for (let i = 0; i <= maxSliderIndex; i++) {
    dotsList.push(i);
  }

  // Pre-calculated WhatsApp content
  const whatsAppBookingBase = "https://wa.me/917356037181?text=";
  const generalBookingText = encodeURIComponent("Please fill the details:\nName:\nAddress:\nProduct:");
  const multivitaminBookingText = encodeURIComponent("Please fill the details:\nName:\nAddress:\nProduct: Voltigen Daily Multivitamin");
  const fishoilBookingText = encodeURIComponent("Please fill the details:\nName:\nAddress:\nProduct: Voltigen Ultra Pure Fish Oil");

  return (
    <>
      {/* Preloader Screen */}
      <div id="preloader" className={isLoaded ? 'loaded' : ''}>
        <div className="preloader-content">
          <img src="/assets/logo.png" alt="Voltigen Logo" className="preloader-logo" />
          <h1 className="preloader-title">VOLTIGEN</h1>
          <div className="preloader-bar">
            <div className="preloader-progress"></div>
          </div>
        </div>
      </div>

      {/* Header & Navigation Area */}
      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="logo-container">
          <a href="#">
            <img src="/assets/logo.png" alt="Voltigen Logo" className="logo" />
          </a>
        </div>

        <nav id="nav-menu" className={isMenuOpen ? 'open' : ''}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={activeSection === link.name ? 'active' : ''}
                  onClick={() => handleNavLinkClick(link.name)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="actions-panel">
          {/* WhatsApp Book Now Button */}
          <a
            href={`${whatsAppBookingBase}${generalBookingText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-book"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.004 2c-5.518 0-9.996 4.48-9.996 10 0 1.76.46 3.42 1.345 4.89l-1.345 4.91 5.03-1.32c1.43.78 3.05 1.22 4.76 1.22 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.67 14.28c-.24.68-1.2 1.25-1.95 1.34-.52.06-1.19.09-1.93-.15-.46-.15-1.02-.37-1.74-.68-3.07-1.27-5.06-4.39-5.21-4.6-.15-.2-.1.08.79-.81 1-.16.21-.3.45-.48.66-.23.23-.48.24-.71.12-.24-.12-1.51-.74-1.76-.87-.25-.13-.42-.19-.51-.1-.09.09-.3.35-.4.53-.1.19-.22.45-.1.68.12.24.48.49.77.78 1.48 1.47 3.32 2.45 5.25 3.08.73.24 1.48.33 2.12.31.62-.02 1.21-.32 1.63-.73.4-.38.53-.48.64-.69.11-.21.06-.4-.01-.52-.07-.12-.55-.83-.75-.95-.2-.12-.34-.18-.48-.06-.14.12-.54.67-.66.8-.12.13-.24.15-.48.03-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.51-1.22-.7-1.68-.18-.45-.37-.39-.51-.39-.13 0-.28-.01-.43-.01-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9s.82 2.2 1.05 2.5c.23.3 2.5 3.82 6.06 5.35.85.36 1.51.58 2.03.74.86.27 1.64.23 2.25.14.68-.1 2.09-.85 2.38-1.68z" />
            </svg>
            <span>Book Now</span>
          </a>

          {/* Hamburger Button for Mobile Menu */}
          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            id="menu-btn"
            aria-label="Toggle Navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Main Hero Section Grid */}
      <main className="hero-container">
        {/* Left Side: Content & Typography */}
        <section className="hero-content">
          <h1 className="hero-title">
            Your Energy.<br />
            Your Edge.<br />
            <span className="gold-text">Voltigen.</span>
          </h1>
          <p className="hero-description">
            Experience peak performance, total body wellness, and sharp focus with Voltigen's precisely formulated
            supplement line.
          </p>
          <a href="#essentials" className="btn-explore">Explore Products</a>
        </section>

        {/* Right Side: Product Display */}
        <section className="hero-visual">
          <div className="hero-image-wrapper">
            <a href="#essentials" className="hero-image-link" aria-label="View essentials products">
              <img src="/assets/hero.png" alt="Voltigen Floating Supplement Bottles" className="hero-img" />
            </a>
          </div>
        </section>
      </main>

      {/* Featured Products Section */}
      <section className="products-section" id="essentials">
        <h2 className="products-section-title">OUR ESSENTIALS</h2>
        <div className="products-grid">

          {/* Card 1: Multivitamin */}
          <div className="product-card">
            <div className="product-card-top">
              <img src="/assets/multivitamin.png" alt="Voltigen Multivitamin" className="product-card-img" />
            </div>
            <div className="product-card-bottom">
              <h3 className="product-title">Multivitamin</h3>
              <p className="product-subtitle">Daily Health & Vitality</p>

              <div className="product-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                  </div>
                  <span className="feature-text">Energy</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <span className="feature-text">Immune</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round">
                      <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                      </path>
                    </svg>
                  </div>
                  <span className="feature-text">Vitality</span>
                </div>
              </div>

              <div className="product-footer">
                <div className="product-actions-group">
                  <button className="product-details-btn" onClick={() => handleOpenDetails('multivitamin')}>View Details</button>
                  <a
                    href={`${whatsAppBookingBase}${multivitaminBookingText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-card"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.004 2c-5.518 0-9.996 4.48-9.996 10 0 1.76.46 3.42 1.345 4.89l-1.345 4.91 5.03-1.32c1.43.78 3.05 1.22 4.76 1.22 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.67 14.28c-.24.68-1.2 1.25-1.95 1.34-.52.06-1.19.09-1.93-.15-.46-.15-1.02-.37-1.74-.68-3.07-1.27-5.06-4.39-5.21-4.6-.15-.2-.1.08.79-.81 1-.16.21-.3.45-.48.66-.23.23-.48.24-.71.12-.24-.12-1.51-.74-1.76-.87-.25-.13-.42-.19-.51-.1-.09.09-.3.35-.4.53-.1.19-.22.45-.1.68.12.24.48.49.77.78 1.48 1.47 3.32 2.45 5.25 3.08.73.24 1.48.33 2.12.31.62-.02 1.21-.32 1.63-.73.4-.38.53-.48.64-.69.11-.21.06-.4-.01-.52-.07-.12-.55-.83-.75-.95-.2-.12-.34-.18-.48-.06-.14.12-.54.67-.66.8-.12.13-.24.15-.48.03-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.51-1.22-.7-1.68-.18-.45-.37-.39-.51-.39-.13 0-.28-.01-.43-.01-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9s.82 2.2 1.05 2.5c.23.3 2.5 3.82 6.06 5.35.85.36 1.51.58 2.03.74.86.27 1.64.23 2.25.14.68-.1 2.09-.85 2.38-1.68z" />
                    </svg>
                    <span>Book Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Fish Oil */}
          <div className="product-card">
            <div className="product-card-top">
              <img src="/assets/fishoil.png" alt="Voltigen Fish Oil" className="product-card-img" />
            </div>
            <div className="product-card-bottom">
              <h3 className="product-title">Fish Oil</h3>
              <p className="product-subtitle">Premium Omega-3</p>

              <div className="product-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round">
                      <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                      </path>
                    </svg>
                  </div>
                  <span className="feature-text">Heart</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <span className="feature-text">Brain</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round">
                      <circle cx="12" cy="5" r="1"></circle>
                      <path d="M9 20a1 1 0 1 0 2 0v-4h2v4a1 1 0 1 0 2 0v-6L12 9l-3 5v6z"></path>
                    </svg>
                  </div>
                  <span className="feature-text">Joints</span>
                </div>
              </div>

              <div className="product-footer">
                <div className="product-actions-group">
                  <button className="product-details-btn" onClick={() => handleOpenDetails('fishoil')}>View Details</button>
                  <a
                    href={`${whatsAppBookingBase}${fishoilBookingText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-card"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.004 2c-5.518 0-9.996 4.48-9.996 10 0 1.76.46 3.42 1.345 4.89l-1.345 4.91 5.03-1.32c1.43.78 3.05 1.22 4.76 1.22 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.67 14.28c-.24.68-1.2 1.25-1.95 1.34-.52.06-1.19.09-1.93-.15-.46-.15-1.02-.37-1.74-.68-3.07-1.27-5.06-4.39-5.21-4.6-.15-.2-.1.08.79-.81 1-.16.21-.3.45-.48.66-.23.23-.48.24-.71.12-.24-.12-1.51-.74-1.76-.87-.25-.13-.42-.19-.51-.1-.09.09-.3.35-.4.53-.1.19-.22.45-.1.68.12.24.48.49.77.78 1.48 1.47 3.32 2.45 5.25 3.08.73.24 1.48.33 2.12.31.62-.02 1.21-.32 1.63-.73.4-.38.53-.48.64-.69.11-.21.06-.4-.01-.52-.07-.12-.55-.83-.75-.95-.2-.12-.34-.18-.48-.06-.14.12-.54.67-.66.8-.12.13-.24.15-.48.03-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.51-1.22-.7-1.68-.18-.45-.37-.39-.51-.39-.13 0-.28-.01-.43-.01-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9s.82 2.2 1.05 2.5c.23.3 2.5 3.82 6.06 5.35.85.36 1.51.58 2.03.74.86.27 1.64.23 2.25.14.68-.1 2.09-.85 2.38-1.68z" />
                    </svg>
                    <span>Book Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Science Section Content */}
      <section className="science-container" id="science">
        <h1 className="science-main-title">THE SCIENCE & OUR STORY</h1>

        {/* Card 1: Our Scientific Foundation */}
        <div className="science-card">
          <div className="science-content center-layout">
            <span className="science-subtitle">ABOUT VOLTIGEN</span>
            <h2 className="science-heading">SCIENCE-POWERED NUTRITION FOR PEAK PERFORMANCE</h2>
            <p className="science-text">
              At Voltigen, we're dedicated to helping you on a transformative health journey. Our mission is to
              provide you with the highest quality supplements, backed by science and crafted with care. Here's
              what you can expect from us:
            </p>
            <ul className="science-bullets-list">
              {['Natural Ingredients', 'Science-backed formula', 'Premium Ingredients', 'Lab tested', 'Recovery support', 'Enhanced performance'].map((bullet) => (
                <li key={bullet} className="science-bullet-item">
                  <span className="science-bullet-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="science-visual-row">
            <div className="science-img-wrapper">
              <img src="/assets/science_lab.png" alt="Voltigen Science Laboratory Workspace" />
            </div>
            <div className="science-img-wrapper">
              <img src="/assets/science_team.png" alt="Voltigen Scientific Team of Researchers" />
            </div>
          </div>

          {/* Focus Grid: Detailed Science Blocks */}
          <div className="science-focus-grid">
            {/* Block 1: Joint Flow */}
            <div className="science-focus-card">
              <div className="focus-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.24 12h-4.14l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="focus-card-title">Enhancing Joint Blood Flow</h3>
              <p className="focus-card-text">
                Your joints play a crucial role in your daily mobility and overall well-being. Proper
                circulation ensures rich oxygenation and nutrient absorption in cartilage tissue.
              </p>
            </div>

            {/* Block 2: Reduce Inflammation */}
            <div className="science-focus-card">
              <div className="focus-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="focus-card-title">Help Reduce Inflammation</h3>
              <p className="focus-card-text">
                Inflammation is a common factor in many chronic health concerns. Our targeted ingredients
                support cellular pathways to bring inflammation markers back to equilibrium.
              </p>
            </div>

            {/* Block 3: Diet Sticking */}
            <div className="science-focus-card">
              <div className="focus-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="focus-card-title">Helps You Stick To Your Diet</h3>
              <p className="focus-card-text">
                Maintaining a healthy diet can be a challenging but essential endeavor. Voltigen works to curb
                nervous cravings and stabilize focus and metabolic energy levels.
              </p>
            </div>

            {/* Block 4: Body Fuel */}
            <div className="science-focus-card">
              <div className="focus-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="focus-card-title">Ingredients To Fuel Your Body</h3>
              <p className="focus-card-text">
                Proper nutrition is the cornerstone of a healthy lifestyle. This advanced formulation delivers
                100% premium quality, highly bioavailable cellular fuel.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Our Story & Philosophy */}
        <div className="science-card">
          <div className="science-grid reverse">
            <div className="science-visual-grid">
              <div className="science-img-wrapper">
                <img src="/assets/founders.png" alt="Voltigen Co-founders Professional Portrait" />
              </div>
            </div>

            <div className="science-content">
              <span className="science-subtitle">OUR STORY & PHILOSOPHY</span>
              <h2 className="science-heading">ADVANCED FORMULA FOR OUR HEALTH</h2>
              <p className="science-text">
                Voltigen was created out of a desire for absolute transparency and clinical dosing in sports
                nutrition. We believe you should never have to compromise between pure organic ingredients and
                real, proven research results.
              </p>
              <p className="science-text">
                At Voltigen, we're dedicated to helping you on a health journey. Our mission is to provide you
                with the highest quality supplements, designed to empower you from cell to joint. We stand
                behind our 100% premium quality guarantee and lab-test every single batch.
              </p>
              <ul className="science-bullets-list">
                <li className="science-bullet-item" style={{ gridColumn: 'span 2' }}>
                  <span className="science-bullet-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  100% Premium Quality Guarantee
                </li>
                <li className="science-bullet-item" style={{ gridColumn: 'span 2' }}>
                  <span className="science-bullet-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  Advanced Formula for Cell & Tissue Repair
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
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

      {/* Q&A Section */}
      <section className="qa-section" id="qa">
        <h2 className="qa-main-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="qa-container">
          {qaList.map((qa, index) => (
            <QaItem
              key={index}
              question={qa.question}
              answer={qa.answer}
              isOpen={activeQaIndex === index}
              onToggle={() => handleQaToggle(index)}
            />
          ))}
        </div>

        {/* WhatsApp Support Footer */}
        <div className="qa-support-footer">
          <p>Still have questions? Get in touch with our team directly.</p>
          <a
            href={`${whatsAppBookingBase}${encodeURIComponent("Question: ")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-qa"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.004 2c-5.518 0-9.996 4.48-9.996 10 0 1.76.46 3.42 1.345 4.89l-1.345 4.91 5.03-1.32c1.43.78 3.05 1.22 4.76 1.22 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.67 14.28c-.24.68-1.2 1.25-1.95 1.34-.52.06-1.19.09-1.93-.15-.46-.15-1.02-.37-1.74-.68-3.07-1.27-5.06-4.39-5.21-4.6-.15-.2-.1.08.79-.81 1-.16.21-.3.45-.48.66-.23.23-.48.24-.71.12-.24-.12-1.51-.74-1.76-.87-.25-.13-.42-.19-.51-.1-.09.09-.3.35-.4.53-.1.19-.22.45-.1.68.12.24.48.49.77.78 1.48 1.47 3.32 2.45 5.25 3.08.73.24 1.48.33 2.12.31.62-.02 1.21-.32 1.63-.73.4-.38.53-.48.64-.69.11-.21.06-.4-.01-.52-.07-.12-.55-.83-.75-.95-.2-.12-.34-.18-.48-.06-.14.12-.54.67-.66.8-.12.13-.24.15-.48.03-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.51-1.22-.7-1.68-.18-.45-.37-.39-.51-.39-.13 0-.28-.01-.43-.01-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9s.82 2.2 1.05 2.5c.23.3 2.5 3.82 6.06 5.35.85.36 1.51.58 2.03.74.86.27 1.64.23 2.25.14.68-.1 2.09-.85 2.38-1.68z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Support & Contact Footer Section */}
      <section className="support-footer-section" id="support">
        <div className="support-footer-container">
          {/* Left Column: Branding, Links & Commitment */}
          <div className="footer-left-col">
            <div className="footer-grid-top">
              <div className="footer-links-group">
                <h4 className="footer-col-title">QUICK LINKS</h4>
                <ul className="footer-links-list">
                  <li><a href="#">Home</a></li>
                  <li><a href="#essentials">Shop</a></li>
                  <li><a href="#science">Science</a></li>
                  <li><a href="#qa">FAQ</a></li>
                  <li><a href="#reviews">About</a></li>
                </ul>
              </div>
              <div className="footer-links-group">
                <h4 className="footer-col-title">RESOURCES</h4>
                <ul className="footer-links-list">
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms</a></li>
                </ul>
              </div>
              <div className="footer-links-group">
                <h4 className="footer-col-title">GET IN TOUCH</h4>
                <ul className="footer-links-list footer-contact-info-list">
                  <li>
                    <svg className="contact-inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>SCF 17 Hollywood Plaza, VIP Road Zirakpur-140603</span>
                  </li>
                  <li>
                    <svg className="contact-inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <a href="mailto:voltigenind@gmail.com">voltigenind@gmail.com</a>
                  </li>
                  <li>
                    <svg className="contact-inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <a href="tel:+917356037181">+91 7356 037181</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-grid-middle">
              <h4 className="footer-col-title">OUR COMMITMENT</h4>
              <p className="footer-commitment-text">
                At Voltigen, we're dedicated to helping you on a transformative health journey. Our mission is to provide you with the highest quality supplements, backed by science and crafted with care, empowering you from cell to joint.
              </p>
            </div>

            <div className="footer-grid-bottom">
              <h4 className="footer-col-title">FOLLOW US</h4>
              <div className="footer-social-links">
                <a href="#" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://wa.me/917356037181?text=Question:%20" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
              </div>
            </div>

            {/* Floating capsule images in left col background */}
            <img src="/assets/fishoil.png" alt="" className="bg-capsule capsule-1" />
            <img src="/assets/multivitamin.png" alt="" className="bg-capsule capsule-2" />
          </div>

          {/* Right Column: Interactive Contact Us Form */}
          <div className="footer-right-col">
            <h3 className="contact-form-title">HAVE A QUESTION?<br /><span>OUR SCIENTISTS ARE HERE</span></h3>
            <p className="contact-form-subtitle">Connect with our team for personalized insights on your health journey.</p>

            <form className="contact-form" id="contact-form-element" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="[ YOUR NAME ]"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="[ YOUR EMAIL ]"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="[ YOUR MESSAGE ]"
                  required
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-submit-request" disabled={isSending}>
                {isSending ? '[ SENDING... ]' : '[ SUBMIT REQUEST ]'}
              </button>
            </form>

            {/* Floating capsule images in right col background */}
            <img src="/assets/fishoil.png" alt="" className="bg-capsule capsule-3" />
            <img src="/assets/multivitamin.png" alt="" className="bg-capsule capsule-4" />
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="footer-copyright-bar">
          <span>© 2026 Voltigen. All rights reserved.</span>
          <div className="footer-copyright-branding">
            <img src="/assets/icon.png" alt="Voltigen V Logo" />
            <span>VOLTIGEN</span>
          </div>
        </div>
      </section>

      {/* Product Details Modal Overlay */}
      <div className={`modal-overlay ${activeProduct ? 'active' : ''}`} id="product-modal" onClick={(e) => e.target.id === 'product-modal' && handleCloseDetails()}>
        {activeProduct && (
          <div className="modal-container">
            <button className="modal-close-btn" id="modal-close" aria-label="Close details" onClick={handleCloseDetails}>
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
                <div className="modal-product-price" id="modal-product-price">{activeProduct.price}</div>
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
                      <path d="M12.004 2c-5.518 0-9.996 4.48-9.996 10 0 1.76.46 3.42 1.345 4.89l-1.345 4.91 5.03-1.32c1.43.78 3.05 1.22 4.76 1.22 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.67 14.28c-.24.68-1.2 1.25-1.95 1.34-.52.06-1.19.09-1.93-.15-.46-.15-1.02-.37-1.74-.68-3.07-1.27-5.06-4.39-5.21-4.6-.15-.2-.1.08.79-.81 1-.16.21-.3.45-.48.66-.23.23-.48.24-.71.12-.24-.12-1.51-.74-1.76-.87-.25-.13-.42-.19-.51-.1-.09.09-.3.35-.4.53-.1.19-.22.45-.1.68.12.24.48.49.77.78 1.48 1.47 3.32 2.45 5.25 3.08.73.24 1.48.33 2.12.31.62-.02 1.21-.32 1.63-.73.4-.38.53-.48.64-.69.11-.21.06-.4-.01-.52-.07-.12-.55-.83-.75-.95-.2-.12-.34-.18-.48-.06-.14.12-.54.67-.66.8-.12.13-.24.15-.48.03-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.51-1.22-.7-1.68-.18-.45-.37-.39-.51-.39-.13 0-.28-.01-.43-.01-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9s.82 2.2 1.05 2.5c.23.3 2.5 3.82 6.06 5.35.85.36 1.51.58 2.03.74.86.27 1.64.23 2.25.14.68-.1 2.09-.85 2.38-1.68z" />
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
    </>
  );
}
