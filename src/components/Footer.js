import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

function Footer() {
    
    return (
      <footer className="mt-5">
        <Container fluid={true}>
          <Row className="border-top justify-content-between p-3">
            <Col className="p-0" md={2} sm={12}>
              <button><i class="far fa-angry"></i>
                <i class="fab fa-angrycreative"></i></button>
            </Col>
            <Col className="p-0 d-flex justify-content-end" md={3}>
              <p>designed & built by Wakeel Jones</p>
            </Col>
            <Col className="p-0 d-flex justify-content-end" md={3}>
              <p><i class="fas fa-envelope"> wakeeljones29@gmail.com</i>,<i class="fas fa-phone"> 081 470 7871</i></p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer;