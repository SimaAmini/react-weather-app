import React from 'react';

const Footer = ({ daily }) => {
  const getDayName = time => {
    const formattedTime = new Date(time * 1000);
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
      formattedTime.getDay()
    ];
  };
  return (
    <footer>
      <div className="forecast">
        {daily.data &&
          daily.data
            .filter(d => d !== daily.data[0])
            .map(day => (
              <div className="forecast__item" key={day.time}>
                <i className={`wi wi-darksky-${day.icon}`}></i>
                <span>{getDayName(day.time)}</span>
                <span>{day.temperatureMax} &#8593;</span>
                <span>{day.temperatureMin} &#8595;</span>
              </div>
            ))}
      </div>
    </footer>
  );
};

export default Footer;
