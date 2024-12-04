import React from 'react';
import './Contact.css';
import SocialLinks from './SocialLinks';
import QuickLinks from './QuickLinks';
import Newsletter from './Newsletter';

function Contact() {
  return (
    <footer className="contact-footer">
      <div className="contact-container">
        <h1 className="contact-title">Contact us !</h1>
        
        <div className="contact-content">
          <Newsletter />
          
          <div className="links-section">
            <QuickLinks />
            <div className="connect-section">
              <h3>Connect With Us</h3>
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Digital Sorcery Saga. All rights reserved</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
            <a href="/cookie">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;