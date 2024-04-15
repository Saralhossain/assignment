import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      {/* Contact Us Section */}
      <div className="jumbotron jumbotron-body">
        <div className="container">
          <h2 className="text-center mb-5">Contact Us</h2>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form id="contact-form" onSubmit={handleSubmit} role="form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Physical Address</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    id="address"
                    name="address"
                    placeholder="Enter your physical address"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <Button type="submit" className="form-button">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Us Section */}
    </div>
  );
};

export default Contact;
