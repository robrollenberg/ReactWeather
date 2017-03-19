var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Voorbeelden</h1>
      <p>Hier staan enkele voorbeelden om uit te proberen:</p>
      <ol>
        <li>
          <Link to='/?location=Alkmaar,nl'>Alkmaar</Link>
        </li>
        <li>
          <Link to='/?location=New York'>New York</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
