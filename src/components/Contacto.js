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
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Click para enviar mensaje por WhatsApp</Tooltip>}
              >
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
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Click para enviar email</Tooltip>}
              >
                <motion.p 
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href="mailto:diegodanieljimenezesparza4@gmail.com"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" /> diegodanieljimenezesparza4@gmail.com
                  </a>
                </motion.p>
              </OverlayTrigger>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;