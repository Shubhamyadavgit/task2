import React from 'react';

const Navbar = () => {
  return (
    <>
    <div className='blog-container'>
        <h1>My Blog</h1>
        <p>Description of My Blog</p>
    </div>
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">HOME</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/blog">BLOG</a></li>
        <li><a href="/contact">CONTACT</a></li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
