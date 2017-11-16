var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Gregersens React Timer</li>
          <li>
            <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
          </li>
          <li>
            <IndexLink to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>CountDown</IndexLink>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="http://mgregersen.dk" target="_blank">Martin Gregersen</a>
          </li>
        </ul>
      </div>
    </div>
    );
  };

module.exports = Nav;
