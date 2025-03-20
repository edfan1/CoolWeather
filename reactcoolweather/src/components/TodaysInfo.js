import React from 'react';

const TodaysInfo = ({ showPopup }) => {
  const handleRainClick = () => {
    showPopup('Rain Map', '', './assets/rainmapbig.jpg');
  };

  const handleWindClick = () => {
    showPopup('Wind Map', '', './assets/windmapbig.jpg');
  };

  return (
    <div className="todays-info">
      <div className="rain module white-text" onClick={handleRainClick}>
        Rain: 5" Today
        <img src="./assets/rainmap2.jpg" alt="Rain Map" />
      </div>
      <div className="wind module white-text" onClick={handleWindClick}>
        Wind: 5 MPH NW
        <img src="./assets/windmap2.jpg" alt="Wind Map" />
      </div>
    </div>
  );
};

export default TodaysInfo;
