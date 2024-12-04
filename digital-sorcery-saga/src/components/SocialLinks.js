import React from 'react';

function SocialLinks() {
  const socialLinks = [
    { name: 'Facebook', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'YouTube', url: '#' }
  ];

  return (
    <ul className="social-links">
      {socialLinks.map((social, index) => (
        <li key={index}>
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            {social.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;