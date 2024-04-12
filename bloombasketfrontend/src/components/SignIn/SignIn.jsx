import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Failed to sign in');
      }

      const { token, userId } = await response.json();
      localStorage.setItem('accessToken', token);
      localStorage.setItem('userId', userId);
      
      navigate('/');
      // alert('Sign In Successful!'); // You can redirect or perform other actions after successful sign-in
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Sign-in failed. Please check your credentials.');
    }
  };


  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="signin-email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="signin-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="signin-password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="signin-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Sign In
              </button>
              <button type="submit" className="btn btn-primary btn-block" onClick={handleRegisterClick}>
              Register
              </button>
              {/* <Button variant="secondary" className="mt-3" block onClick={handleRegisterClick}>
                Register
              </Button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
