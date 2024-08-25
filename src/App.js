import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Form } from './Form';

function App() {
  const [buttonStatus,setButtonStatus] = useState(false);
  const handeleButtonStatus = () => {
    setButtonStatus(!buttonStatus);
  }
  return ( 
    <div className="App">
      <button onClick={handeleButtonStatus}>Show Form</button>
      { buttonStatus && <Form />}
    </div>
  );
}

export default App;
