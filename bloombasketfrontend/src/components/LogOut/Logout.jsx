import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    
    navigate('/');
    window.location.reload();
    // Show a notification
    // toast.success('Logged out successfully!', {
    //   position: toast.POSITION.TOP_BOTTOM,
    // });
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
