import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
      <div className="footer1">
        <section>
          <h4>Links</h4>
          <ul>
            <li>PSDtuts-Photoshop tutorials</li>
            <li>NETtuts -Web development and design tutorials</li>
            <li>Vectortut-Illustrator and vector tutorials</li>
            <li>Flashtuts-Adobe Flash tutorials</li>
          </ul>
        </section>
        </div>
        <div className="footer2">
        <section>
          <h4>Follow our updates</h4>
          <ul>
            <li>Subscribe to RSS Feed</li>
            <li>What is Rss?</li>
            <li>Email Updates</li>
          </ul>
        </section>
        </div>
      </div>
      <div className="right-footer">
      <p>Copyright © 2008.</p>
      <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
