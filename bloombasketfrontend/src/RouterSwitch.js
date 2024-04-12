import { BrowserRouter , Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import SignIn from './components/SignIn/SignIn';
import Footer from './components/Footer/Footer';
import Register from "./components/Register/Register";
import Logout from "./components/LogOut/Logout";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/logout' element={<Logout/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default RouteSwitch;
