import React from 'react';
import { DatePicker } from 'antd';

import './App.scss';

function App() {

  const test = (date, dateString) => {
    console.log(date, dateString);
    
  };

  return (
    <div className=",app">
      <h1>Hola App React</h1>
      <h2>Proyecto</h2>
      <DatePicker onChange={test}/>
    </div>
  );
}

export default App;
