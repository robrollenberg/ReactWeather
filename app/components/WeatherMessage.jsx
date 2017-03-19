var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
      <h3 className="text-center">Het is nu {temp} graden in {location}</h3>
  );
};

module.exports = WeatherMessage;
