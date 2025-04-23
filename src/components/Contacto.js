import React from 'react';
import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import '../styles/Contacto.css'

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
                style={{ cursor: 'pointer' }}
              >
                <a 
                  href="https://wa.me/524494676251?text=Hola,%20vi%20tu%20CV%20y%20me%20gustaría%20contactarte" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="me-2" style={{ color: '#25D366' }} /> 449-467-6251
                  <span style={{ fontSize: '0.8em', marginLeft: '10px', color: '#666' }}>👆 Click para enviar mensaje</span>
                </a>
              </motion.p>
              <motion.p 
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ cursor: 'pointer' }}
              >
                <a 
                  href="mailto:diegodanieljimenezesparza4@gmail.com"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" /> diegodanieljimenezesparza4@gmail.com
                  <span style={{ fontSize: '0.8em', marginLeft: '10px', color: '#666' }}>👆 Click para enviar email</span>
                </a>
              </motion.p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;