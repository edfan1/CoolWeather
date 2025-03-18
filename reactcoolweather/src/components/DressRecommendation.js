import React, { useState } from 'react';

const DressRecommendation = () => {
  const images = [
    { src: './assets/raindressrec1.jpg', indicator: "0 O O" },
    { src: './assets/raindressrec2.jpg', indicator: "O 0 O" },
    { src: './assets/raindressrec3.jpg', indicator: "O O 0" }
  ];

  const [index, setIndex] = useState(0);

  const changeImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="dress-recommendation module white-text" onClick={changeImage}>
      <p>Dress Recs: </p>
      <img id="dressimage" src={images[index].src} alt="Dress Recommendation" />
      <p id="imageindicator">{images[index].indicator}</p>
    </div>
  );
};

export default DressRecommendation;
