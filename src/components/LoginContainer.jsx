import React from 'react';
import './Login.css'; // certifique-se de criar esse arquivo

const LoginContainer = () => {
  return (
    <div className="login-container">
      <h1 className="logo"></h1>

      <input type="email" placeholder="Email" className="login-input" />
      <input type="password" placeholder="Senha" className="login-input" />
      <button className="login-button">Entrar</button> {/* Estilo apenas para o botão Entrar */}
    </div>
  );
};

export default LoginContainer;
