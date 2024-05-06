/* import logo from './logo.svg'; */
import './App.css';
import React from 'react';
import Navbar from './Navbar.js';
import Body from './Body'; 
import Footer from './Footer.js';
import QuemSomos from './QuemSomos.js';
import Contato from './Contato.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <div className="App">
    <Navbar />
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Body />} />
      <Route  path='a' element={<Contato />} />
      <Route path='b' element={<QuemSomos />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>

  );
  }

  export default App;

