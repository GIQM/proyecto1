import React from "react";
import "./Footer.css";

const Footer = ({ phraseRamdom, changeShadow, changeColor }) => {
  return (
    <>
      <div className="global__container" style={changeShadow}>
        <p className="footer__container">{phraseRamdom.author}</p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={changeColor}
          >
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
