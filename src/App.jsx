import React, {useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import phrasesArray from "./assets/data.json";
import imgArray from "../public/img/imagen.json";
import { getRandomNumber } from "./utils/getRandomNumber";
import "./App.css";

function App() {
  const [phraseStart, setPhrase] = useState(getRandomNumber(0, phrasesArray.length - 1));
  const [imgStart, setImg] = useState(getRandomNumber(0, imgArray.length - 1));

  const handleClick = () => {
    setImg(getRandomNumber(0, imgArray.length - 1));
    setPhrase(getRandomNumber(0, phrasesArray.length - 1));
  };
  const imgStyle = {
    backgroundImage: imgArray[imgStart].img,
  };
  const shadowStyle = {
    boxShadow: imgArray[imgStart].shadow,
    border: imgArray[imgStart].border,
  };
  const colorStyle = {
    color: imgArray[imgStart].color,
  };

  return (
    <section className="app" style={imgStyle}>
      <h1 className="tile">Famous Phrases</h1>
      {/* <marquee >Famous Phrases</marquee> */}
      <Card
        phraseRamdom={phrasesArray[phraseStart]}
        changePhrase={handleClick}
        changeShadow={shadowStyle}
      />
      <Footer
        phraseRamdom={phrasesArray[phraseStart]}
        changeShadow={shadowStyle}
        changeColor={colorStyle}
      />
    </section>
  );
}
export default App;
