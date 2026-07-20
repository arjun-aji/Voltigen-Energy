import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Science from './components/Science';
import Reviews from './components/Reviews';
import QA from './components/QA';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

type ProductIds = 'multivitamin' | 'fishoil';

export default function App() {
  const [activeProductId, setActiveProductId] = useState<ProductIds | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      prevent: (node) => {
        return node instanceof Element && node.closest('#product-modal') !== null;
      },
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Store lenis on window object so we can access it to stop/start scrolling
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);



  const handleOpenDetails = (productId: ProductIds) => {
    setActiveProductId(productId);
  };

  const handleCloseDetails = () => {
    setActiveProductId(null);
  };

  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <Products onOpenDetails={handleOpenDetails} />
      <Science />
      <Reviews />
      <QA />
      <Footer />
      <ProductModal activeProductId={activeProductId} onClose={handleCloseDetails} />
    </>
  );
}
