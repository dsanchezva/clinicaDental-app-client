import React, { useContext, useEffect } from 'react'
import { AuthContext } from "../context/auth.context";
import { useNavigate } from 'react-router-dom';

function Admin() {
  const { isLoggedIn, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  
  
  
  
  
  
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate('/admin')
    }
  }, []);

  return (
    <div>
      <h1>Administracion</h1>
    </div>
  )
}

export default Admin