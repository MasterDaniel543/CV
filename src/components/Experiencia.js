import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Experiencia() {
  return (
    <Container className="seccion">
      <h3 className='center-titulos my-3' data-aos="fade-down">EXPERIENCIA</h3>
      <Row>
        <Col>
          <Card className="mb-3 experience-card" data-aos="zoom-in" data-aos-delay="100">
            <Card.Body>
              <Card.Title>Veterinaria Adoratrices (Mayo 2024 - Agosto 2024)</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">DESARROLLO WEB</Card.Subtitle>
              <Card.Text>
                Desarrollé un sistema web para la gestión de clientes y procesos internos, trabajando con formularios dinámicos, autenticación de usuarios, base de datos en MySQL y funciones como envío automatizado de mensajes por WhatsApp, firmas digitales y filtrado de historial. Además, optimicé el manejo de información mediante un sistema de altas, bajas y consultas.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="experience-card" data-aos="zoom-in" data-aos-delay="200">
            <Card.Body>
              <Card.Title>Llenadora Automática - (FADS MDB / UCE) Despachadores de Agua</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">SISTEMAS DE CONTROL AUTOMATIZADO</Card.Subtitle>
              <Card.Text>
                Realicé ajustes clave en la asignación de productos, precios y tiempos para una llenadora automática, optimizando el proceso de despacho de agua mediante la integración de FADS MDB y UCE. Garantizando una gestión eficiente y dinámica de los tiempos y precios en tiempo real.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Experiencia;