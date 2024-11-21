import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <h1>Bienvenidos</h1>
      <input 
        type="text" 
        placeholder="Ingresa tu nombre" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}

export default Login;
