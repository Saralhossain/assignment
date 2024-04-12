import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
