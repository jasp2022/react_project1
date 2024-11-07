// Login.js
import React, { useState } from 'react';
import './Login.css';
import ErrorMessage from './ErrorMessage';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const validateForm = () => {
    let formErrors = {};

    // Validar si los campos están vacíos
    if (!email) {
      formErrors.email = 'El campo de correo es obligatorio';
    }

    if (!password) {
      formErrors.password = 'El campo de contraseña es obligatorio';
    }

    // Validación de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
      formErrors.email = 'Formato de correo electrónico inválido';
    }

    // Validación de longitud de contraseña
    if (password && password.length < 8) {
      formErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }

    setErrors(formErrors);

    // Retorna true si no hay errores
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Validar credenciales correctas
      if (email === 'admin@sena.edu.co' && password === 'AdminSENA2024') {
        setIsLoggedIn(true);
        alert('Inicio de sesión exitoso');
      } else {
        setErrors({ general: 'Correo o contraseña incorrectos' });
      }
    }
  };

  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Correo electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <ErrorMessage message={errors.email} />}
        </div>
        <div className="form-group">
          <label className="label">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <ErrorMessage message={errors.password} />}
        </div>
        <button type="submit">Ingresar</button>
        {errors.general && <ErrorMessage message={errors.general} />}
      </form>
      {isLoggedIn && <p className="success-message">Bienvenido, has iniciado sesión correctamente.</p>}
    </div>
  );
}

export default Login;
