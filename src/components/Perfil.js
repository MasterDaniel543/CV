import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/Perfil.css'


function Perfil() {
  return (
    <Container className="seccion">
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="profile-card">
              <Card.Body>
                <Card.Title>Mi Perfil</Card.Title>
                <Card.Text>
                  Apasionado por la tecnología y la innovación, con experiencia en desarrollo de aplicaciones web. Habilidad para trabajar en equipo, resolución de problemas y adaptación a nuevas tecnologías.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Perfil;