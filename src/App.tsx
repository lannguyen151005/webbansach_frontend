import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './layouts/header-footer/Navbar';
import Footer from './layouts/header-footer/Footer';
import Homepage from './layouts/homepage/Homepage';
import { getAllBooks } from './api/BookAPI';
import List from './layouts/product/BookList';
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
