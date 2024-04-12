import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Home.css';
const Home = () => {
  return (
    <div>
      {/* Header Jumbotron */}
      <div className="jumbotron jumbotron-header">
        <div className="container">
          <div className="row align-items-center" >
            <div className="col-md-6 text-center">
              <h1 className="display-4">Discover the Latest Floral Arrangements</h1>
              <p className="lead mb-4">Explore our exquisite collection of fresh blooms and find the perfect arrangements for any occasion!</p>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="card border-0 rounded-lg shadow-lg">
                <img src="https://lakshmisharath.com/wp-content/uploads/2014/05/amsterdam-flower-market.jpg" className="card-img-top rounded-top" alt="Flower Market" height={400} width={450} />
                <div className="card-body">
                  <h5 className="card-title text-center">Limited Time Offer</h5>
                  <p className="card-text text-center">Get up to 50% off on selected items</p>
                  {/* <a href="TopDeals.html" className="btn btn-warning btn-sm btn-block rounded-pill">View Deals</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Jumbotron */}

      {/* Body Jumbotron */}
      <div className="jumbotron jumbotron-body">
        <div className="container">
          {/* Menu Highlights Start */}
          <div className="row text-center" >
            <div className="col-md-3">
              <div className="card border-0 mb-4">
                <a href="shop.html#Roses">
                  <img src="https://imgcdn.floweraura.com/DSC_1243_0.jpg?tr=w-264,q-70" className="card-img-top category-img" alt="Roses" />
                </a>
                <div className="card-body">
                  <h5 className="card-title category-title">Roses</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 mb-4">
                <a href="shop.html#Lily">
                  <img src="https://imgcdn.floweraura.com/white-lily-radiance-9799410fl-A.jpg?tr=w-264,q-70" className="card-img-top category-img" alt="Lily" />
                </a>
                <div className="card-body">
                  <h5 className="card-title category-title">Lily</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 mb-4">
                <a href="shop.html#Orchid">
                  <img src="https://imgcdn.floweraura.com/DSC_3928.jpg?tr=w-264,q-70" className="card-img-top category-img" alt="Orchid" />
                </a>
                <div className="card-body">
                  <h5 className="card-title category-title">Orchid</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 mb-4">
                <a href="shop.html#Gerbera">
                  <img src="https://imgcdn.floweraura.com/FA-15_A.jpg?tr=w-264,q-70" className="card-img-top category-img" alt="Gerbera" />
                </a>
                <div className="card-body">
                  <h5 className="card-title category-title">Gerbera</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Body Jumbotron */}

      {/* Testimonials Section */}
      <div className="container py-5" style={{backgroundColor:"#fd7e14"}}>
        <h2 className="text-center mb-5">Customer Testimonials</h2>
        <div className="row" style={{display:"flex" , flexDirection:"row" , alignItems:'center' , justifyContent:"center" }}>
          <div className="col-md-3">
            <div className="card border-0 shadow">
              <div className="card-body text-center">
                <p className="lead mb-4">"Amazing service! The flowers were fresh and beautiful. Highly recommended!"</p>
                <h5 className="font-weight-bold">Jane Doe</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow">
              <div className="card-body text-center">
                <p className="lead mb-4">"I ordered a bouquet for my mom's birthday and she loved it! Thanks, Bloom Basket!"</p>
                <h5 className="font-weight-bold">John Smith</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow">
              <div className="card-body text-center">
                <p className="lead mb-4">"Excellent selection of flowers and prompt delivery. Will definitely order again!"</p>
                <h5 className="font-weight-bold">Emily Johnson</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
