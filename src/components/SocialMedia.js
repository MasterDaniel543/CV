import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import '../styles/SocialMedia.css';

function SocialMedia() {
  return (
    <Container className="seccion">
      <Card className="social-media-card">
        <Card.Body>
          <Card.Title>Redes</Card.Title>
          <motion.div 
            whileHover={{ scale: 1.05, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a 
              href="https://github.com/MasterDaniel543" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faGithub} className="me-2" /> GitHub
            </a>
          </motion.div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SocialMedia;