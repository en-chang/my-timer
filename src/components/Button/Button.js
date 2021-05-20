import React from 'react';
import './Button.css';

class Button extends React.Component {
  clicked() {
    alert('Hi Button!');
  }
  render() {
    return (
      <button className='button' onClick={this.clicked}>Hello Button!</button>
    );
  }
}

export default Button;
