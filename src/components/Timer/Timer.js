import React from 'react';
import Countdown from 'react-countdown';
import './Timer.css';

class Timer extends React.Component {
  render() {
    return (
      <Countdown className='timer' date={Date.now() + 5000}>
        {/* Sound on completion */}
      </Countdown>
    );
  }
}

export default Timer;
