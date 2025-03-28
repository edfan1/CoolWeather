import React from 'react';

const WeatherSummary = ({ showPopup }) => {
  const handleHourlyClick = () => {
    showPopup(
      'Hourly Forecast',
      "It is currently 31° and raining. The temperature will drop to 20° by 9PM. Rainy conditions will continue until around 7:38 PM, although this time may differ based on your area. Today's temperature range is 34°-20°. Tomorrow will be 31°-20° with cloudy conditions.",
      '' // No img in this popup
    );
  };

  return (
    <div className="weather-summary module white-text">
      <div className="text-summary">
        <span>Rain is making it feel colder.</span>
        <span>Rain until 7:38 PM</span>
      </div>
      <div className="line"></div>
      <div className="hourly-forecast white-text" onClick={handleHourlyClick}>
        <ul>
          <li>
            <div>Now</div>
            <div><img className="icon" src="./assets/raincloud.png" alt="Rain"/></div>
            <div>31°</div>
          </li>
          <li>
            <div>1PM</div>
            <div><img className="icon" src="./assets/raincloud.png" alt="Rain"/></div>
            <div>33°</div>
          </li>
          <li>
            <div>2PM</div>
            <div><img className="icon" src="./assets/raincloud.png" alt="Rain"/></div>
            <div>34°</div>
          </li>
          <li>
            <div>3PM</div>
            <div><img className="icon" src="./assets/raincloud.png" alt="Rain"/></div>
            <div>30°</div>
          </li>
          <li>
            <div>4PM</div>
            <div><img className="icon" src="./assets/raincloud.png" alt="Rain"/></div>
            <div>27°</div>
          </li>
          <li>
            <div>6PM</div>
            <div><img className="icon" src="./assets/raincloud.png" alt="Rain"/></div>
            <div>26°</div>
          </li>
          <li>
            <div>7PM</div>
            <div><img className="icon" src="./assets/raincloud.png" alt="Rain"/></div>
            <div>23°</div>
          </li>
          <li>
            <div>8PM</div>
            <div><img className="icon" src="./assets/cloudicon.png" alt="Cloud"/></div>
            <div style={{ marginTop: '5px' }}>22°</div>
          </li>
          <li>
            <div>9PM</div>
            <div><img className="icon" src="./assets/cloudicon.png" alt="Cloud"/></div>
            <div style={{ marginTop: '5px' }}>20°</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherSummary;
