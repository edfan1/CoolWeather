import React from 'react';

const TemperatureDisplay = () => {
  return (
    <div className="temperature">
      <span className="white-text" id="feels-like-temp">31°</span>
      <span className="grey-text" id="true-temp"> True: 36°</span>
      <span className="grey-text" id="hi-lo-temp">H: 34° L: 20°</span>
    </div>
  );
};

export default TemperatureDisplay;
