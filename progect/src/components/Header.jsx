import React from "react";

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-content">
                <h1 className="header-title">Contact Me</h1>
                <div className="rectangle"></div> 
                <p className="contact-text">
                    Let me know if you want to talk about a potential collaboration.<br />
                    I'm available for freelance work.
                </p>
            </div>
            
            <p className="email"> infoname@email.com</p>
        </header>
    );
};

export default Header;
