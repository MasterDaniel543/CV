import React from 'react';
    import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

    function Idiomas() {
      return (
        <Container className="seccion">
          <h3 className="center-titulos my-3">IDIOMAS</h3>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item className='custom-list-item'>Español</ListGroup.Item>
                    <ListGroup.Item className='custom-list-item'>Inglés</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }

    export default Idiomas;