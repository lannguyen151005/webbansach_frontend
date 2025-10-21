import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './layouts/header-footer/Navbar';
import Footer from './layouts/header-footer/Footer';
import Homepage from './layouts/homepage/Homepage';
import { getAllBooks } from './api/BookAPI';
import List from './layouts/product/BookList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './layouts/about/About';
function App() {

  const [keyword, setKeyWord] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar keyword={keyword} setKeyword={setKeyWord} />
        <Routes>
          <Route path="/" element={<Homepage keyword={keyword} />} />
          <Route path="/:genreId" element={<Homepage keyword={keyword} />} />

          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
