import React from 'react'
import Button from "../Button/Button";
import "./Card.css"

const Card = ({ phraseRamdom, changePhrase, changeShadow }) => {
  return (
    <>
      <div className="card__container" style={changeShadow}>
        <p className="card__phrase">{phraseRamdom.quote}</p>
      </div>
      <Button changePhrase={changePhrase} />
    </>
  );
};

export default Card