import React from 'react';

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

class Beep extends React.Component {
  clicked() {
    beep(20,100,30);
  }
  render() {
    return (
      <button className='button' onClick={this.clicked}>Hello Beep!</button>
    );
  }
}

export default Beep;
