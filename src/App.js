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
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <Button type="primary" onClick={() => setIsUpdate(true)}>Continuar</Button>
        </header>
    }
  </div>
  )
}

export default withAuthenticator(App);
// export default App;