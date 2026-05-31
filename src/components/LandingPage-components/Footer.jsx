import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="footer-logo" variants={itemVariants} aria-label="AgriVita">
        <span className="footer-logo-mark" aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 5C13.8 9.1 11.2 13.8 11.2 19.1C11.2 25.9 15.6 31 18 33.2C20.4 31 24.8 25.9 24.8 19.1C24.8 13.8 22.2 9.1 18 5Z" fill="url(#footerLogoGradient)"/>
            <path d="M18 12.1C16.5 14 15.6 16.2 15.6 18.5C15.6 21.6 17.4 24.3 18 25.2C18.6 24.3 20.4 21.6 20.4 18.5C20.4 16.2 19.5 14 18 12.1Z" fill="#f8fafc" opacity="0.92"/>
            <path d="M8.9 24.8C11.9 25.1 14.6 24.4 16.8 22.8" stroke="#d9f99d" strokeWidth="1.8" strokeLinecap="round"/>
            <defs>
              <linearGradient id="footerLogoGradient" x1="11.2" y1="5" x2="24.8" y2="33.2" gradientUnits="userSpaceOnUse">
                <stop stopColor="#facc15"/>
                <stop offset="0.55" stopColor="#84cc16"/>
                <stop offset="1" stopColor="#15803d"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="sr-only">AgriVita</span>
      </motion.div>
      
      <motion.p className="footer-note" variants={itemVariants}>
        Built for farmers who want faster decisions, cleaner yields, and clearer profit signals.
      </motion.p>

      <motion.div className="footer-contact" variants={itemVariants}>
        <a href="mailto:chekolengusalem@gmail.com" className="footer-contact-link" aria-label="Email chekolengusalem@gmail.com" title="Email">
          <span className="footer-contact-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </span>
          <span className="sr-only">chekolengusalem@gmail.com</span>
        </a>
        <a href="https://t.me/che1221r" target="_blank" rel="noreferrer" className="footer-contact-link" aria-label="Telegram @che1221r" title="Telegram">
          <span className="footer-contact-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.6 4.9 18.7 19c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.6.6-1.2.6l.4-5.1L18 6.6c.3-.3-.1-.5-.5-.2L7.5 12.8 2.5 11.2c-1.1-.3-1.1-1.1.2-1.6L20.3 4c.9-.3 1.6.2 1.3.9Z" />
            </svg>
          </span>
          <span className="sr-only">@che1221r</span>
        </a>
        <a href="https://www.linkedin.com/in/chekole-majilan-8b4651336/" target="_blank" rel="noreferrer" className="footer-contact-link" aria-label="LinkedIn profile" title="LinkedIn">
          <span className="footer-contact-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.6 2.5H5.4A2.9 2.9 0 0 0 2.5 5.4v13.2a2.9 2.9 0 0 0 2.9 2.9h13.2a2.9 2.9 0 0 0 2.9-2.9V5.4a2.9 2.9 0 0 0-2.9-2.9ZM8 18H5.5V9.2H8V18Zm-1.2-9.9A1.45 1.45 0 1 1 8.3 6.6a1.45 1.45 0 0 1-1.5 1.5ZM18 18h-2.5v-4.5c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V18H9.6V9.2H12v1.2h.1a2.6 2.6 0 0 1 2.3-1.3c2.5 0 3 1.6 3 3.7V18Z" />
            </svg>
          </span>
          <span className="sr-only">LinkedIn</span>
        </a>
      </motion.div>

      <motion.div className="footer-copyright" variants={itemVariants}>
        © {currentYear} AgriVita. All rights reserved. Empowering farmers through technology.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
