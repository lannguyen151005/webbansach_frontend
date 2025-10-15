import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './layouts/header-footer/Navbar';
import Footer from './layouts/header-footer/Footer';
import Homepage from './layouts/homepage/Homepage';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Homepage/>
        <Footer/>
    </div>
  );
}

export default App;
