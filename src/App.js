import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      {
        useEffect(()=>{
          console.log("component mount")
        })
      }
    </div>
  );
}

export default App;
