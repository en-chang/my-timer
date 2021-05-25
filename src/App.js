import './App.css';
import Navbar from './components/Navbar/Navbar';
import Timer from './components/Timer/Timer';
import Beep from './components/Beep/Beep'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Hello Timer!</h1>
      <Timer></Timer>
      <br></br>
      <Beep></Beep>
    </div>
  );
}

export default App;
