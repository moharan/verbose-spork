import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";
import "./App.css";

function Info() {
  return (
    <div className="App">
      <p>Ultimos Eventos</p>
      <div>
        <Card
          size="small"
          title="Evento más cercano"
          extra={
            <div>
                <a href="#">PRECAUCIÓN</a>
                <a href="#">DURANTE</a>
                <a href="#">DESPUES</a>
            </div>}
          style={{
            width: 300,
          }}
        >
          <p>2022-07-21</p>
          <p>12:43:23</p>
          <p>62 km al S de Socaire</p>
          <p>264 KM</p>
          <h4>2.8</h4>
        </Card>
      </div>
    </div>
  );
}

export default Info;
