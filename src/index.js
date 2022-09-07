import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Amplify, { I18n } from 'aws-amplify';
import config from './aws-exports';
import "antd/dist/antd.css";
import './index.css';
import App from './App';
Amplify.configure(config);

I18n.setLanguage('es');

const dict = {
  'es': {
    "Sign In": "Vamos a SISMOGUíA",
    "Username *": "Usuario *",
    "Password *": "Contraseña *",
    "Enter your password": "Ingrese su contraseña",
    "Enter your username": "Ingrese su usuario",
    "Reset Password": "Reiniciar Contraseña",
    "Sign in to your account": "Iniciar Sesión Sismoguía",
    "Forgot your password?": "¿Olvidaste tu contraseña?",
    "Reset password": "Reiniciar Contraseña",
    "No account?": "¿No tienes una cuenta?",
    "Create account": "Crear una cuenta",
    // "Please fill out this field. ": "No funciona",
    "Create a new account": "Crear una Nueva Cuenta",
    "Username": "Usuario",
    "Password": "Contraseña",
    "Create Account": "Crear cuenta",
    "Have an account?": "¿Tienes cuenta?",
    "Sign in": "Iniciar sesión",
    "Phone Number *": "Número Telefónico",
    "Email Address *": "Correo electrónico",
    "Reset your password": "Reinicie su contraseña",
    "Back to Sign In": "Volver al inicio de sesión",
    "Send Code": "Enviar código",
    "Sign Out": "Cerrar sesión",
    "Confirm Sign up": "Confirmar Registro",
    "Confirmation Code": "Código de Confirmación",
    "Confirm": "CONFIRMAR",
    "Lost your code?": "¿Perdiste tu código?",
    "Resend Code": "Reenviar código",
    "Change Password": "Cambiar Contraseña",
    "New password": "Nueva contraseña",
    "Enter your new password": "Ingrese su nueva contraseña",
    "Change": "Cambiar",
    "User does not exist.": "Datos de usuario no existente",
    "Incorrect username or password.": "Usuario o contraseña incorrecta",
    "Network error": "Error de red"
  }
};

I18n.putVocabularies(dict);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
