import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/Experiencia.css';

function Experiencia() {
  return (
    <Container className="seccion">
      <h3 className='center-titulos my-3' data-aos="fade-down">EXPERIENCIA</h3>
      <Row>
        <Col>
          <motion.div
            whileHover={{ scale: 1.02, x: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="experience-card" data-aos="zoom-in" data-aos-delay="100">
              <Card.Body>
                <Card.Title>Veterinaria Adoratrices (Mayo 2024 - Agosto 2024)</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">DESARROLLO WEB</Card.Subtitle>
                <Card.Text>
                  Desarrollé un sistema web para la gestión de clientes y procesos internos, trabajando con formularios dinámicos, autenticación de usuarios, base de datos en MySQL y funciones como envío automatizado de mensajes por WhatsApp, firmas digitales y filtrado de historial. Además, optimicé el manejo de información mediante un sistema de altas, bajas y consultas.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, x: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="experience-card" data-aos="zoom-in" data-aos-delay="200">
              <Card.Body>
                <Card.Title>Llenadora Automática - (FADS MDB / UCE) Despachadores de Agua</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">SISTEMAS DE CONTROL AUTOMATIZADO</Card.Subtitle>
                <Card.Text>
                  Realicé ajustes clave en la asignación de productos, precios y tiempos para una llenadora automática, optimizando el proceso de despacho de agua mediante la integración de FADS MDB y UCE. Garantizando una gestión eficiente y dinámica de los tiempos y precios en tiempo real.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, x: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="experience-card" data-aos="zoom-in" data-aos-delay="300">
              <Card.Body>
                <Card.Title>Sistema de Gestión de Autobuses (Hackatón Mobility)</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">DESARROLLADOR | PROYECTO PERSONAL</Card.Subtitle>
                <Card.Text>
                  "Desarrollo de interfaces de usuario móviles con React" trabajando en un entorno de equipo ágil para generar soluciones innovadoras en el ámbito de la movilidad.
                </Card.Text>
                <Card.Text>
                  Desarrollo del sistema:
                </Card.Text>
                <ul>
                  <li><strong>Desarrollo Backend:</strong> Creación de una API RESTful segura (Node.js, Express), implementación de autenticación y autorización robustas (JWT, roles), diseño y gestión de bases de datos seguras (MongoDB con encriptación),implementación de chat (Bot) en tiempo real.</li>
                  <li><strong>Desarrollo Frontend:</strong> Construcción de interfaces de usuario responsivas y dinámicas (React.js, Material-UI) con enfoque en la experiencia del usuario y la integración de servicios como Google Maps.</li>
                  <li><strong>Seguridad:</strong> Implementación de protocolos SSL/HTTPS, encriptación de datos y medidas de protección contra vulnerabilidades comunes.</li>
                </ul>
              </Card.Body>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, x: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="experience-card" data-aos="zoom-in" data-aos-delay="400">
              <Card.Body>
                <Card.Title>Car Information - Proyecto Personal</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">DESARROLLO FRONTEND | PROYECTO DEMOSTRATIVO</Card.Subtitle>
                <Card.Text>
                  Desarrollo de una aplicación web moderna para gestión de información automotriz, implementando características avanzadas de seguridad y experiencia de usuario.
                </Card.Text>
                <ul>
                  <li><strong>Características Principales:</strong> Sistema de autenticación multi-rol, panel administrativo, diseño responsivo, autenticación 2FA, recuperación de contraseña vía SMS</li>
                  <li><strong>Tecnologías Frontend:</strong> React.js, CSS, Axios, JWT, React Router</li>
                  <li><strong>Componentes Destacados:</strong> Catálogo con filtros dinámicos, gestión de perfiles, formularios seguros, visualización de imágenes cifradas</li>
                </ul>
                <Card.Text>
                  <a 
                    href="https://car-information.onrender.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#0d1041', textDecoration: 'none', display: 'flex', alignItems: 'center', marginTop: '10px' }}
                  >
                    🚀 Ver Proyecto Demostrativo <span style={{ fontSize: '0.8em', marginLeft: '10px', color: '#666' }}>👆 Click para visitar</span>
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Experiencia;