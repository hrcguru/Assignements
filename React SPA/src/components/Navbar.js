import React from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map(item => (
          <li key={item.key} className="nav-item">
            <button
              className={`nav-link ${currentPage === item.key ? 'active' : ''}`}
              onClick={() => setCurrentPage(item.key)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                font: 'inherit'
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;