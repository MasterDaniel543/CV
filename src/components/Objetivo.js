import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/Objetivo.css'


function Objetivo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const cardVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <Container className="seccion">
      <Row>
        <Col>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              whileHover="hover"
              variants={cardVariants}
            >
              <Card>
                <Card.Body>
                  <motion.div variants={itemVariants}>
                    <Card.Title>OBJETIVOS</Card.Title>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Card.Text>
                      Aplicar mis conocimientos en Tecnologías de la Información y Comunicación para desarrollar soluciones eficientes en desarrollo web, gestión de bases de datos y optimización de procesos.
                    </Card.Text>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Card.Text>
                      Contribuir al crecimiento tecnológico de una empresa mediante la innovación y el uso de herramientas modernas.
                    </Card.Text>
                  </motion.div>
                </Card.Body>
              </Card>
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Objetivo;