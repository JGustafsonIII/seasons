import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  } else {
    return lat > 0 ? 'Winter' : 'Summer';
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  return (
    <div>
      <h1>
        {season === 'Winter' ? 'Burr, it is chilly!' : 'Lets hit the beach!'}
      </h1>
    </div>
  );
};

export default SeasonDisplay;
