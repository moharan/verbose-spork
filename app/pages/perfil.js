import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth, I18n } from "aws-amplify";
I18n.setLanguage('es');
import { Card } from "antd";
import { useState, useEffect } from "react";

function Perfil() {
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

  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  }

  if (!user) return null;
  return (
    <Card>
      <h1>Perfil</h1>
      <div className="profile">
        <div>
          <h2 className="detail-title">Username: {user.username}</h2>
          <p className="detail-info">Email: {user.attributes.email}</p>
        </div>
        <AmplifySignOut />
      </div>
    </Card>
  );
}

export default withAuthenticator(Perfil);
