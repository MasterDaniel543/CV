import React from 'react';
    import { Container, Row, Col, Card } from 'react-bootstrap';

    function Educacion() {
      return (
        <Container className="seccion">
            <h3 className='center-titulos my-3'>FORMACIÓN</h3>
          <Row>
            <Col>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>UNIVERSIDAD TECNOLÓGICA DE AGUASCALIENTES (UTA)</Card.Title>
                  <Card.Text>
                    Técnico Superior Universitario (TSU) en Tecnologías de la Información y Desarrollo de software Multiplataforma
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>UNIVERSIDAD TECNOLÓGICA DE AGUASCALIENTES (UTA) (ACTUALMENTE)</Card.Title>
                  <Card.Text>
                    Ingeniería en Tecnologías de la Información Comunicación y Desarrollo de software Multiplataforma
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }

    export default Educacion;