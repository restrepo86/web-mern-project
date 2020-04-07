import React from 'react';

import './App.scss';
import Admin from './pages/Admin';
import SignIn from './pages/Admin/SignIn';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <h1>Estamos en App.js</h1>
      <Admin />
      <SignIn />
      <Home />
      <Contact />
    </>
  );
}


export default App;
