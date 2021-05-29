import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  clicked() {
    console.log("Hi Button!");
  }
  render() {
    return (
      <button title={this.title} className='button' onClick={this.clicked}/>
    );
  }
}

export default Button;
