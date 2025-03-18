import React from 'react';

const TodaysInfo = () => {
  return (
    <div className="todays-info">
      <div className="rain module white-text" >
        Rain: 5" Today
        <img src="./assets/rainmap2.jpg" alt="Rain Map" />
      </div>
      <div className="wind module white-text" >
        Wind: 5 MPH NW
        <img src="./assets/windmap2.jpg" alt="Wind Map" />
      </div>
    </div>
  );
};

export default TodaysInfo;
