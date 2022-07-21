import React, { useEffect } from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-sign-out">
        <AmplifySignOut />
      </div>
      <header className="App-header">
        <p className="building">Logotipo</p>
        <p className="details">Proyecto de Título, UNAB Advance</p>
        <button>Continuar</button>
      </header>
      <section>
      </section>
    </div>
  );
}

export default withAuthenticator(App);
