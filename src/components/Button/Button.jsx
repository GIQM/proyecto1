import React from 'react'
import './Button.css'

const Button = ({ changePhrase }) => {
  return (
    <button onClick={changePhrase}>
      <i className="fa-solid fa-rotate-right"></i>
    </button>
  );
}

export default Button