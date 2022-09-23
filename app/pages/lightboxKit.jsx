import React from "react";
import { Modal } from "antd";

const Kit = (props) => {
  return (
    <Modal
      centered
      visible={props.isKit}
      width={800}
      onCancel={() => {
        props.setIsKit(false);
      }}
    >
      <h1 className="alert-message">Kit básico de Emergencia</h1>
      <ul>
        <li>
          Agua: considera dos litros por persona al día (incluye botellas chicas
          que son más fáciles de trasladar).{" "}
        </li>
        <li>Comida: enlatada, barras energéticas y comida deshidratada.</li>
        <li>Abrelatas manual.</li>
        <li>Linternas y baterías.</li>
        <li>Radio portátil con baterías adicionales.</li>
        <li>Botiquín de primeros auxilios.</li>
        <li>
          Ítemes especiales: medicamentos y anteojos. Considera las necesidades
          de niños, tercera edad y discapacitados.
        </li>
        <li>Llaves de repuesto de tu casa y de tu auto.</li>
        <li>Dinero en efectivo.</li>
        <li>Copia del Plan de Emergencia.</li>
      </ul>
      <a target="_blank" href="https://www.onemi.gov.cl/kits-de-emergencia/">
        Ver más info en Onemi
      </a>
    </Modal>
  );
};

export default Kit;
