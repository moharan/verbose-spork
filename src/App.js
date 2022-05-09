import React from 'react';
import Construction from "./img/construction.jpg";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="construction"
          src={Construction}
          alt="Sitio en Construcción"
        />
        <p className="building">Sitio en Construcción</p>
        <h1>We now have Auth!</h1>
        <p className="details">Proyecto de Título, UNAB Advance</p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
