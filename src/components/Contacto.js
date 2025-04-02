import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

function Contacto() {
  return (
    <Container className="seccion">
      <Row>
        <Col>
          <Card className="contact-card">
            <Card.Body>
              <Card.Title>Contacto</Card.Title>
              <motion.p 
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={faPhone} className="me-2" /> 449-182-9369
              </motion.p>
              <motion.p 
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a 
                  href="https://wa.me/524494676251?text=Hola,%20vi%20tu%20CV%20y%20me%20gustaría%20contactarte" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="me-2" style={{ color: '#25D366' }} /> 449-467-6251
                </a>
              </motion.p>
              <motion.p 
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="me-2" /> esparzadaniel61956@gmail.com
              </motion.p>
              <motion.p 
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> Calle Desarrollo 109, Municipio Libre, CP-20199
              </motion.p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;