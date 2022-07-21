import React, { useState } from "react";
import { Button } from "antd";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Update from "./Update.jsx"
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const [isUpdate, setIsUpdate] = useState(false);
  return(
    <div className="App">
    <div className="App-sign-out">
      <AmplifySignOut />
    </div>
    {isUpdate ? <Update/> :
          <header className="App-header">
          <p className="building">Logotipo</p>
          <p className="details">Proyecto de Título, UNAB Advance</p>
          <Button type="primary" onClick={() => setIsUpdate(true)}>Continuar</Button>
        </header>
    }
  </div>
  )
}

export default withAuthenticator(App);