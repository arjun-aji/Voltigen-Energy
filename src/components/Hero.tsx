export default function Hero() {
  return (
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
  );
}
