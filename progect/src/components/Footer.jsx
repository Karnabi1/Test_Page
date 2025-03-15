import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="social-links">
        <p>Let's Be Friends</p>
        <div className="icons">
          {Array(3).fill().map((_, index) => (
            <div className="icon-container" key={index}>
              <img className="background-icon" src="/images/Polygon-1-copy-2 2.png" alt="background" />
              <img className="overlay-icon" src="/images/fe_instagram.png" alt="Instagram" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
