import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    // Show a notification
    toast.success('Logged out successfully!', {
      position: toast.POSITION.TOP_CENTER
    });
  }

  return (
    <div className="text-center mt-4">
      <Button variant="danger" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  )
}

export default Logout
