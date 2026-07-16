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
