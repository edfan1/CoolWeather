import React, { useState } from 'react';
import LocationBar from './components/LocationBar';
import TemperatureDisplay from './components/TemperatureDisplay';
import WeatherSummary from './components/WeatherSummary';
import TodaysInfo from './components/TodaysInfo';
import DressRecommendation from './components/DressRecommendation';
import WeeklyForecast from './components/WeeklyForecast';

function App() {
  return (
    <div className="phone">
      <LocationBar />
      <TemperatureDisplay />
      <WeatherSummary />
      <div className="middle-content">
        <TodaysInfo />
        <DressRecommendation />
      </div>
      <WeeklyForecast />
    </div>
  );
}

export default App;
