import React, { useState } from "react";
import { Col, Row, Form, Input, Button } from "antd";
import Info from "./Info.jsx";
import "antd/dist/antd.css";
import "./App.css";

function Update() {
  const [isInfo, setIsInfo] = useState(false);
  return (
    <>
      {isInfo ? (
        <Info />
      ) : (
        <Row>
          <Col span={3} />
          <Col span={18}>
            <Form layout="vertical">
              <Form.Item label="Comuna de Residencia">
                <Input placeholder="Ingrese tu lugar de estadia más permanente" />
              </Form.Item>
              <Form.Item label="Comuna de Trabajo *">
                <Input placeholder="Ingrese tu lugar de trabajo cotidiano" />
              </Form.Item>
              <Form.Item label="Persona I de emergencia">
                <Input placeholder="Ingrese el nombre de persona a comunicar en caso de ayuda" />
              </Form.Item>
              <Form.Item label="Telefono Persona I de Ayuda">
                <Input placeholder="Ingrese el telefono de persona a comunicar en caso de emergencia" />
              </Form.Item>
              <Form.Item label="Persona II de emergencia *">
                <Input placeholder="Ingrese el nombre de persona a comunicar en caso de ayuda" />
              </Form.Item>
              <Form.Item label="Telefono Persona II de Ayuda *">
                <Input placeholder="Ingrese el telefono de persona a comunicar en caso de emergencia" />
              </Form.Item>
              <div className="detail-form">
                <Form.Item>
                  <Button type="primary" onClick={() => setIsInfo(true)}>
                    GUARDAR DATOS
                  </Button>
                  <Button onClick={() => setIsInfo(true)}>OMITIR</Button>
                </Form.Item>
              </div>
            </Form>
          </Col>
          <Col span={3} />
        </Row>
      )}
    </>
  );
}

export default Update;
