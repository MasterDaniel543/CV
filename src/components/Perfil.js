import React from 'react';
    import { Container, Row, Col, Card } from 'react-bootstrap';

    function Perfil() {
      return (
        <Container className="seccion">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Mi Perfil</Card.Title>
                  <Card.Text>
                    Apasionado por la tecnología y la innovación, con experiencia en desarrollo de aplicaciones web. Habilidad para trabajar en equipo, resolución de problemas y adaptación a nuevas tecnologías.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }

    export default Perfil;