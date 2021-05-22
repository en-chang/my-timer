import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <ul>
        <li><a className="active" href="#home">Home</a></li>
        <li className="right"><a className="active" href="#signup">Sign up</a></li>
        <li className="right"><a className="active" href="#login">Log in</a></li>
      </ul>
    );
  }
}

export default Navbar;
