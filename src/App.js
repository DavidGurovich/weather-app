import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=6a514bdeb53691e0aed7971b303f3d9b`
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
