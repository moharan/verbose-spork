import React from "react";
import { Modal } from "antd";

const Cuidado = (props) => {
  return (
    <Modal
      centered
      visible={props.isCuidado}
      width={800}
      onCancel={() => {
        props.setIsCuidado(false);
      }}
    >
      <h1 className="alert-message">Medidas de precaución</h1>
      <ol>
        <li>Verifique <b>de qué material está construido</b> su hogar o lugar de estudio o de trabajo. Si es de adobe o autoconstrucción, evacúe inmediatamente durante un sismo.</li>
        <li>Identifique <b>lugares de protección</b> lejos de ventanas y elementos que puedan caerle encima. Ancle los muebles al piso, los muros o el cielo, para que no se vuelquen durante un sismo.</li>
        <li>Identifique dónde están las <b>llaves</b> del agua, de corte general de gas y el interruptor o fusible general de electricidad y aprenda cómo cortarlas.</li>
        <li>Elabore un plan familiar que establezca los <b>puntos de encuentro</b> y los roles de cada integrante del hogar.</li>
        <li>Mantenga un <b>Kit de Emergencia</b></li>
      </ol>
    </Modal>
  );
};

export default Cuidado;
