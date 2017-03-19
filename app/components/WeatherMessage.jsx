var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
      <h3>De temperatuur is {temp} in {location}</h3>
  );
};

module.exports = WeatherMessage;
