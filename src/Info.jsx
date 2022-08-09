import React from "react";
import { Card, Button, Popover } from "antd";
import "antd/dist/antd.css";
import "./App.css";

function Info() {
  return (
    <div className="App">
      <p>Ultimos Eventos</p>
      <div>
        <Card
          size="small"
          title="Santiago"
          extra={
            <div>
                <Popover content={"cuidado"} title="Medidas Precaución"><a><span class="material-symbols-outlined">support_agent</span></a></Popover>
                <Popover content={"- Durante el Sismo"} title="Información"><a><span class="material-symbols-outlined">psychology_alt</span></a></Popover>
                <Popover content={"- Después del Sismo"} title="Información"><a><span class="material-symbols-outlined">warning</span></a></Popover>
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
        {/* <Card
          size="small"
          title="San antonio"
          extra={
            <div>
                <a><span class="material-symbols-outlined">support_agent</span></a>
                <a><span class="material-symbols-outlined">psychology_alt</span></a>
                <a><span class="material-symbols-outlined">warning</span></a>
            </div>}
          style={{
            width: 300,
          }}
        >
          <p>2022-00-00</p>
          <p>00:00:00</p>
          <p>00 km al --------</p>
          <p>000 KM</p>
          <h4>0.0</h4>
        </Card> */}
      </div>
    </div>
  );
}

export default Info;
