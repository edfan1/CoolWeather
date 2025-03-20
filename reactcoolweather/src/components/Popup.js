import React from 'react';

const Popup = ({ popupData, hidePopup }) => {
  return (
    <div
      className="overlay grey-text"
      id="overlay"
      onClick={hidePopup}
      style={{ display: 'flex' }}
    >
      <div className="popup" id="popup" onClick={(e) => e.stopPropagation()}>
        <h3 id="popup-title">{popupData.title}</h3>
        {popupData.imgSrc && (
          <img id="popup-img" src={popupData.imgSrc} alt={popupData.title} />
        )}
        <p id="popup-content">{popupData.content}</p>
      </div>
    </div>
  );
};

export default Popup;
