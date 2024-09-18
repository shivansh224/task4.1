import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">DEV@Deakin</div>
      <input type="text" className="search-bar" placeholder="Search here..." />
      <div className="actions">
        <button className="action-btn">Post</button>
        <button className="action-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
