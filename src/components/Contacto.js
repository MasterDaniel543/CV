import React from 'react';
    import { Container, Row, Col, Card } from 'react-bootstrap';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

    function Contacto() {
      return (
        <Container className="seccion">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Contacto</Card.Title>
                  <p>
                    <FontAwesomeIcon icon={faPhone} className="me-2" /> 449-182-9369
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" /> esparzadaniel61956@gmail.com
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> Calle Desarrollo 109, Municipio Libre, CP-20199
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }

    export default Contacto;