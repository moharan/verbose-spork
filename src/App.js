import Construction from "./img/construction.jpg";
import "./App.css";

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
        <p className="details">Proyecto de Título, UNAB Advance</p>
      </header>
    </div>
  );
}

export default App;
