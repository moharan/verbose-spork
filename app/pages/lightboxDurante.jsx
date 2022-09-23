import React from "react";
import { Modal } from "antd";

const Durante = (props) => {
  return (
    <Modal
      centered
      visible={props.isDurante}
      width={800}
      onCancel={() => {
        props.setIsDurante(false);
      }}
    >
      <h1 className="alert-message">Durante el sismo o terremoto</h1>
      <ol>
        <li>Mantenga la calma y ubíquese en un lugar de protección sísmica.</li>
        <li>Protéjase y afírmese debajo o junto a un <b>elemento firme.</b></li>
        <li>Si está <b>en silla de ruedas</b>, intente moverse a un lugar de protección. Si no es posible, frénela y cubra su cabeza y cuello con los brazos.</li>
        <li>Si está <b>en la calle</b>, aléjese de los edificios, postes y cables eléctricos.</li>
        <li>Si está en un <b>evento masivo</b>, mantenga la calma y quédese en su lugar. Proteja su cabeza y cuello con los brazos y siga las instrucciones de los encargados de seguridad.</li>
        <li>Si va <b>manejando en la ciudad</b>, disminuya la velocidad y deténgase en un lugar seguro. Si va por una autopista, reduzca la velocidad y no se detenga. Manténgase atento a las condiciones del tránsito, señalice dirigiéndose a la salida más cercana o acérquese a la berma en autopistas rurales.</li>
      </ol>
    </Modal>
  );
};

export default Durante;
