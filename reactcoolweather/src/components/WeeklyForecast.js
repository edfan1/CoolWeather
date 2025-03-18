import React from 'react';

const weeklyData = [
  { day: 'Today', icon: './assets/raincloud.png', range: '34°-20°' },
  { day: 'Tuesday', icon: './assets/cloudicon.png', range: '31°-20°' },
  { day: 'Wednesday', icon: './assets/raincloud.png', range: '37°-29°' },
  { day: 'Thursday', icon: './assets/sunicon.png', range: '31°-23°' },
  { day: 'Friday', icon: './assets/sunicon.png', range: '27°-19°' },
  { day: 'Saturday', icon: './assets/snowflake.png', range: '19°-10°' },
  { day: 'Sunday', icon: './assets/snowflake.png', range: '20°-8°' }
];

const WeeklyForecast = () => {
  return (
    <div className="weekly-forecast module white-text">
      <div className="line">Weekly Forecast</div>
      <ul>
        {weeklyData.map((dayData, index) => (
          <li key={index} className={index < weeklyData.length - 1 ? 'line' : ''}>
            <div className="daily">
              <div>{dayData.day}</div>
              <div><img className="icon" src={dayData.icon} alt={dayData.day} /></div>
              <div>{dayData.range}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyForecast;
