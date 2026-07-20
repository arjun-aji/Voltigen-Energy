import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);

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

  return (
    <div id="preloader" className={isLoaded ? 'loaded' : ''}>
      <div className="preloader-content">
        <img src="/assets/logo.png" alt="Voltigen Logo" className="preloader-logo" />
        <h1 className="preloader-title">VOLTIGEN</h1>
        <div className="preloader-bar">
          <div className="preloader-progress"></div>
        </div>
      </div>
    </div>
  );
}
