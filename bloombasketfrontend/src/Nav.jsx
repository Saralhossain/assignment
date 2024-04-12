import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-primary" >
      <div className="container" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" , paddingLeft: "20px", paddingRight: "20px" }}>
        <Link to="/" className="navbar-brand" style={{ fontFamily: "'Delius Swash Caps', cursive" }}>
          <img src="https://d38ulo0p1ibxtf.cloudfront.net/fit-in/2560x1600/users/1/images/original_image_09-06-2021_11:44:04.png" alt="Bloom Basket Logo" width="100" height="50" />
        </Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: 'black' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link" style={{ color: 'black' }}>
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ color: 'black' }}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={{ color: 'black' }}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link" style={{ color: 'black' }}>
                Cart
              </Link>
            </li>
           { !localStorage.getItem('accessToken') ? 
           <>
           <li className="nav-item">
              <Link to="/signin" className="nav-link" style={{ color: 'black' }}>
                Sign in
              </Link>
            </li> 
             <li className="nav-item">
             <Link to="/register" className="nav-link" style={{ color: 'black' }}>
               Register
             </Link>
           </li>
           </>
            : 
            <li>
            <Link to="/logout" className="nav-link" style={{ color: 'black' }}>
               Log Out
             </Link>
           </li>
            }
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
