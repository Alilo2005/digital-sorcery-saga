import React from 'react';

function QuickLinks() {
  const links = [
    { title: 'Home', url: '/' },
    { title: 'About Us', url: '/about' },
    { title: 'Agenda', url: '/agenda' },
    { title: 'Workshops', url: '/workshops' },
    { title: 'Sponsors', url: '/sponsors' },
    { title: 'FAQ', url: '/faq' }
  ];

  return (
    <div className="quick-links">
      <h3>Quick Links</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickLinks;