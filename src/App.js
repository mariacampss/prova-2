/* import logo from './logo.svg'; */
import './App.css';
import React from 'react';
import Navbar from './Navbar.js';
import Body from './Body'; 
import Footer from './Footer.js';


/* import React from 'react'; import { BrowserRouter, Routes, Route } from 'react-router-dom'; */
function App() {
  return (
  <div className="App">
  <Navbar />
  <Body />
 {/*  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/contato' element={<FormularioContato />} />
  </Routes>
  </BrowserRouter> */}




  <Footer />
  </div>
  
  );
  }

  export default App;
/*
<BrowserRouter>
<Routes> 
<Route path='/' element={<Home />} />
<Route path='/contato' element={<FormularioContato />} />
</Routes>
</BrowserRouter> */

