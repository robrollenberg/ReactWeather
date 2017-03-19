var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Over React Weer</h1>
      <p>
        Dit is een weer applicatie gebouwd in React.
      </p>
      <p>
        Hier zijn enkele tools, welke gebruikt zijn:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - Dit is het Javascript framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Dit is de Api welke gebruikt wordt om het weer te bepalen.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
