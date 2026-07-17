import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('HOME');

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'PRODUCTS', href: '#essentials' },
    { name: 'THE SCIENCE', href: '#science' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'Q&A', href: '#qa' },
    { name: 'SUPPORT', href: '#support' }
  ];

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

  const handleNavLinkClick = (sectionName) => {
    setActiveSection(sectionName);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="logo-container">
          <a href="#" className="logo-text">
            VOLTIGEN
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
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

      {/* Mobile Navigation Drawer Menu */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <button
          className="mobile-nav-close"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close Navigation"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
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
    </>
  );
}
