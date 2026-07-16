import { useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Science from './components/Science';
import Reviews from './components/Reviews';
import QA from './components/QA';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

export default function App() {
  const [activeProductId, setActiveProductId] = useState(null);

  const handleOpenDetails = (productId) => {
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
