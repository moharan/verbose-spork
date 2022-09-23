import React from "react";
import { Modal } from "antd";

const Despues = (props) => {

  return (
    <Modal
    centered
    visible={props.isDespues}
    width={800}
    onCancel={() => {
      props.setIsDespues(false);
    }}
  >
      <h1 className="alert-message">Después de un sismo o terremoto</h1>
      <ol>
        <li>Si está <b>cerca del mar</b> y el sismo fue tan fuerte como para no poder mantenerse en pie, diríjase de inmediato a una zona de seguridad frente a tsunami, establecidas en lugares altos.</li>
        <li><b>Corte los suministros de gas y electricidad</b>. Antes de restablecerlos, asegúrese de que no existan fugas.</li>
        <li>Solo <b>use linternas para iluminar</b>, no velas, fósforos o encendedores (porque podría provocarse una explosión si hay fugas de gas).</li>
        <li>Use <b>mensajes de texto</b> para comunicarse con su familia y manténgase informado con una radio o televisor a pilas y solo siga los reportes oficiales.</li>
        <li>Si queda encerrado, mantenga la calma, pida auxilio y espere la llegada de los rescatistas.</li>
        <li>Si está <b>atrapado</b>, cúbrase la boca y nariz. Evite gritar y dé señales dando golpes con algún elemento.</li>
      </ol>
    </Modal>
  );
};

export default Despues;