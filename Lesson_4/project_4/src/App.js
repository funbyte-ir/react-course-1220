import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import UserCard from './UserCard';

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
          style={{color: "red"}}
        >
          Learn React
        </a>
        <MyButton  >This is a button</MyButton>
        <UserCard    name={"amin"} family={"emrani"}/>
      </header>
    </div>
  );
}

export default App;
