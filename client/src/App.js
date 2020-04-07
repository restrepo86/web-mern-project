import React from 'react';

import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {


  return (
    <Router>
      <div className=",app">
        <h1>Sistema de Rutas Basico</h1>

        <Link to='/'>Home</Link> <br/>
        <Link to='/contact'>Contact</Link> <br/>
        <Link to='/users'>Users</Link> <br/>

        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/contact' component={ Contact } />
          <Route exact path='/users' component={ Users } />
          <Route component={ Error404 } />
        </Switch>
        
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Estamos en el componente home ...</h2>
};

function Contact() {
  return <h2>Estamos en el componente Contact ...</h2>
};

function Users() {
  return <h2>Estamos en el componente Users ...</h2>
};

function Error404() {
  return <h2>Error 404</h2>
};

export default App;
