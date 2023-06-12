import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

  useEffect(() => {
      axios.get('http://localhost:8000/api/mead/allMead', )
          .then((res) => console.log(res))
          .catch((err) => console.log('oops'))
  }, []);

  useEffect(() => {
    axios.post('http://localhost:8000/api/mead/melomel/tea', {bod: 'the hair, the bod!'})
        .then((res) => console.log(res))
        .catch((err) => console.log('oops'))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
