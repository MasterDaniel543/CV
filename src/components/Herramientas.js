import React from 'react';
    import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

    function Herramientas() {
      return (
        <Container className="seccion">
          <h3 className='center-titulos my-3'>HERRAMIENTAS</h3>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item className="custom-list-item">MySQL</ListGroup.Item>
                  <ListGroup.Item className="custom-list-item">HTML</ListGroup.Item>
                  <ListGroup.Item className="custom-list-item">JavaScript</ListGroup.Item>
                  <ListGroup.Item className="custom-list-item">CSS</ListGroup.Item>
                  <ListGroup.Item className="custom-list-item">Actualmente aprendiendo: React y otros frameworks</ListGroup.Item>
                </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }

    export default Herramientas;