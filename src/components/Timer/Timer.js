import React from 'react';
import Countdown from 'react-countdown';
import Button from '../Button/Button.js';
import './Timer.css';

const a=new AudioContext() // browsers limit the number of concurrent audio contexts, so you better re-use'em

function beep(vol, freq, duration){
  var v=a.createOscillator()
  var u=a.createGain()
  v.connect(u)
  v.frequency.value=freq
  v.type="square"
  u.connect(a.destination)
  u.gain.value=vol*0.01
  v.start(a.currentTime)
  v.stop(a.currentTime+duration*0.001)
}

class Timer extends React.Component {
  completed() {
    beep(20,100,30);
  }
  render() {
    return (
      <div>
        <Countdown className='timer' date={Date.now() + 5000} autoStart={false} onComplete={this.completed}></Countdown>
        <br></br>
        <Button title='Did this work?'></Button>
      </div>
    );
  }
}

export default Timer;
