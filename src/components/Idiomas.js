import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Idiomas() {
  return (
    <Container className="seccion">
      <h3 className="center-titulos my-3">IDIOMAS</h3>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ListGroup.Item className='custom-list-item'>Español</ListGroup.Item>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ListGroup.Item className='custom-list-item'>Inglés</ListGroup.Item>
                </motion.div>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Idiomas;