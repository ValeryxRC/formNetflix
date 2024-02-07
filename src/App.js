import logo from './logo.svg';
import './App.css';
import Form  from './Components/Form';
import FormNetflix from './Components/FormNetflix';
import next from "./assets/next.png";
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Form></Form> */}
      <br></br><br></br><br></br><br></br><br></br>
      <div id='registerNetflix'>
      <FormNetflix></FormNetflix>
        <br></br>
      </div>
      
    </div>
  );
}

export default App;
