import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
  };

  return (
    <div className="newsletter-section">
      <p>Subscribe to our newsletter for the latest updates on features and releases.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Join</button>
      </form>
      <small>By subscribing, you consent to our Privacy Policy and agree to receive updates.</small>
    </div>
  );
}

export default Newsletter;