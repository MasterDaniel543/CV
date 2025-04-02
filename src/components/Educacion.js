import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Educacion() {
  return (
    <Container className="seccion">
      <h3 className='center-titulos my-3'>FORMACIÓN</h3>
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-3 education-card">
              <Card.Body>
                <Card.Title>UNIVERSIDAD TECNOLÓGICA DE AGUASCALIENTES (UTA)</Card.Title>
                <Card.Text>
                  Técnico Superior Universitario (TSU) en Tecnologías de la Información y Desarrollo de software Multiplataforma
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="education-card">
              <Card.Body>
                <Card.Title>UNIVERSIDAD TECNOLÓGICA DE AGUASCALIENTES (UTA) (ACTUALMENTE)</Card.Title>
                <Card.Text>
                  Ingeniería en Tecnologías de la Información Comunicación y Desarrollo de software Multiplataforma
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Educacion;