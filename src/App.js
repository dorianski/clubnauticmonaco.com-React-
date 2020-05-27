import React from 'react';
import './app.scss';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Menu from './components/menu/menu';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Contact />
    </div>
  );
}

export default App;
