import React, { useState } from 'react';

import './App.css';
import Navbar from './layouts/header-footer/Navbar';
import Footer from './layouts/header-footer/Footer';
import Homepage from './layouts/homepage/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './layouts/about/About';
import BookDetail from './layouts/product/BookDetail';
import RegisterUser from './layouts/user/RegisterUser';
import AccountActivation from './layouts/user/AccountActivation';

function App() {

  const [keyword, setKeyWord] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar keyword={keyword} setKeyword={setKeyWord} />
        <Routes>
          <Route path="/" element={<Homepage keyword={keyword} />} />
          <Route path="/:genreId" element={<Homepage keyword={keyword} />} />
          <Route path="/books/:bookId" element={<BookDetail/>} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<RegisterUser/>}/>
          <Route path='/activate/:email/:activeCode' element={<AccountActivation/>}/> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
