import { useState } from 'react';

export default function Footer() {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

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

  return (
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
                  <a href="https://maps.app.goo.gl/SVk2BghF2m1chegLA?g_st=ic" target="_blank" rel="noopener noreferrer">
                    NUTRIONE PROTEIN HOUSE INDIA
                  </a>
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
              <div className="footer-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.917578272846!2d76.61366367484435!3d8.875323191180237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fd3d2e7351af%3A0xb7ac8ca0231df5ef!2sNUTRIONE%20PROTEIN%20HOUSE%20INDIA!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NUTRIONE PROTEIN HOUSE INDIA Location Map"
                ></iframe>
              </div>
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
  );
}
