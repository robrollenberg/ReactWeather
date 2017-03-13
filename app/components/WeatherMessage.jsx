var React = require('react');

var WeatherMessage = (props) => {
  var {location, temp} = props;

// of doe dit zonder de props mee te geven en alleen waardes
// var WeatherMessage = ({location, temp}) => {

  return (
      <h3>De temperatuur is {temp} in {location}</h3>
  );
};

module.exports = WeatherMessage;
