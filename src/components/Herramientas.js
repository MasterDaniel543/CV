import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/Herramientas.css';


function Herramientas() {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <Container className="seccion">
      <h3 className='center-titulos my-3' data-aos="fade-down">HERRAMIENTAS</h3>
      <Row>
        <Col>
          <Card className="tools-card">
            <Card.Body>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={listVariants}
              >
                <ListGroup variant="flush">
                  <motion.div variants={itemVariants}>
                    <ListGroup.Item className="custom-list-item">Bases de Datos Relacionales (MySQL) y Bases de Datos NoSQL (MongoDB)</ListGroup.Item>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <ListGroup.Item className="custom-list-item">HTML</ListGroup.Item>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <ListGroup.Item className="custom-list-item">JavaScript</ListGroup.Item>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <ListGroup.Item className="custom-list-item">CSS</ListGroup.Item>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <ListGroup.Item className="custom-list-item">Actualmente mejorando en: React y otros frameworks</ListGroup.Item>
                  </motion.div>
                </ListGroup>
              </motion.div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Herramientas;