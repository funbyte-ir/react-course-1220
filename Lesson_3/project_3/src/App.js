import logo from './logo.svg';
import './App.css';
import Funbyte from './Funbyte';
import Funbyte2 from './Funbyte2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Funbyte hello="asdsdfgdfg" description="Funbyte is a programming training institute." >

          <Funbyte2></Funbyte2>
        </Funbyte>
      </header>
    </div>
  );
}

export default App;
