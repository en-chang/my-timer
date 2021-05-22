import './App.css';
import Navbar from './components/Navbar/Navbar';
import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Hello World!</h1>
      <Timer></Timer>
      <br></br>
      <Button></Button>
    </div>
  );
}

export default App;
