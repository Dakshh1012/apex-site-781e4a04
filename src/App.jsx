import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Darsh Bajaj</div>
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="hero" className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Capturing Moments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm Darsh Bajaj, a passionate photographer capturing the world through my lens.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          View My Work
        </motion.button>
      </section>

      <section id="features" className="features">
        <h2>My Work</h2>
        <div className="feature-cards">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="feature-card"
          >
            <h3>Portrait Photography</h3>
            <p>Capturing the essence of people through candid and artistic portraits.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="feature-card"
          >
            <h3>Wedding Photography</h3>
            <p>Documenting love stories with a blend of emotion and creativity.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="feature-card"
          >
            <h3>Landscape Photography</h3>
            <p>Exploring nature's beauty through breathtaking landscapes.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="feature-card"
          >
            <h3>Event Photography</h3>
            <p>Capturing the energy and memories of special events and gatherings.</p>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Darsh Bajaj. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;