import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        Welcome, Guest   <a href="/login">Login</a> <a href="/signup">SignUp</a>
      </div>
      <div className="header-right">
        Stay Updated: <a href="/subscribe">Subscribe via RSS Email Updates</a>
      </div>
    </header>
  );
};

export default Header;
