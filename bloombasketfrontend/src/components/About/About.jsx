import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const About = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-body">
        <div className="container about-us-content">
          <h2 className="text-center mb-5 card-title font-weight-bold">About Us</h2>
          <p className="card-text text-center">Bloom Basket is a leading online florist providing a wide range of fresh flowers, bouquets, and floral arrangements for every occasion. With our commitment to quality and customer satisfaction, we strive to make every floral experience memorable.
          Our team of expert florists carefully curates each bouquet, ensuring that every stem is handpicked and arranged to perfection. Whether you're celebrating a special milestone or simply brightening someone's day, Bloom Basket has the perfect floral solution for you.
          At Bloom Basket, we believe in the power of flowers to convey emotions and create lasting memories. That's why we go above and beyond to deliver not just flowers, but happiness and joy to our customers.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
