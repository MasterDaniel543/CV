import React from 'react';
    import { Container, Row, Col, Card } from 'react-bootstrap';

    function Objetivo() {
      return (
        <Container className="seccion">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>OBJETIVOS</Card.Title>
                  <Card.Text>
                    Aplicar mis conocimientos en Tecnologías de la Información y Comunicación para desarrollar soluciones eficientes en desarrollo web, gestión de bases de datos y optimización de procesos. Contribuir al crecimiento tecnológico de una empresa mediante la innovación y el uso de herramientas modernas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }

    export default Objetivo;