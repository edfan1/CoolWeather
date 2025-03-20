import React, { useState } from 'react';
import LocationBar from './components/LocationBar';
import TemperatureDisplay from './components/TemperatureDisplay';
import WeatherSummary from './components/WeatherSummary';
import TodaysInfo from './components/TodaysInfo';
import DressRecommendation from './components/DressRecommendation';
import WeeklyForecast from './components/WeeklyForecast';
import Popup from './components/Popup';

function App() {
  const [popupData, setPopupData] = useState({
    isVisible: false,
    title: '',
    content: '',
    imgSrc: ''
  });

  const showPopup = (title, content, imgSrc) => {
    setPopupData({
      isVisible: true,
      title,
      content,
      imgSrc
    });
  };

  const hidePopup = () => {
    setPopupData(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <div className="phone">
      <LocationBar />
      <TemperatureDisplay />
      <WeatherSummary showPopup={showPopup} />
      <div className="middle-content">
        <TodaysInfo showPopup={showPopup} />
        <DressRecommendation />
      </div>
      <WeeklyForecast />
      {popupData.isVisible && <Popup popupData={popupData} hidePopup={hidePopup} />}
    </div>
  );
}

export default App;
