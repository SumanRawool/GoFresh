import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaEnvelope, FaPhone, FaMapMarker } from "react-icons/fa";
import freepikkajal from "../../src/images/freepikkajal.jpg";
import freepikdee from "../../src/images/freepikdee.jpg";
import freepiksuman from "../../src/images/freepiksuman.jpg";

export default function ContactUs() {
  return (
    <>
    <Container>
      <h1>Contact Us</h1>
      <h3>Feel free to reach out to us using the form below:</h3>
      <Row xs={1} md={2} className="g-4">
        <Card style={{ width: "24rem", height: "30rem" }}>
          <Card.Img variant="top" src={freepikdee} />
          <Card.Body>
            <Card.Title>Deepali Rawlani</Card.Title>
            <Card.Text>Experience Dealer</Card.Text>
            <a href="https://www.linkedin.com/in/deepali-rawlani-b54156254">
              LinkedIn
            </a>
            <br></br>
            <a href="">GitHub</a>
            <pre>Email:deepalirawlani20@gmail.com</pre>
            <p>8786086980</p>
          </Card.Body>
        </Card>

        <Card style={{ width: "24rem" }}>
          <Card.Img variant="top" src={freepiksuman} />
          <Card.Body>
            <Card.Title>Suman Rawool</Card.Title>
            <Card.Text>Experience Dealer</Card.Text>
            <a href="https://www.linkedin.com/in/suman-rawool/">LinkedIn</a>
            <br></br>
            <a href="https://github.com/SumanRawool">GitHub</a>
            <pre>Email:sumanrawool2@gmail.com</pre>
            <p>6776484848</p>
          </Card.Body>
        </Card>

        <Card style={{ width: "24rem" }}>
          <Card.Img variant="top" src={freepikkajal} />
          <Card.Body>
            <Card.Title>Kajal Rajput</Card.Title>
            <Card.Text>Experience Dealer</Card.Text>
            <a href="https://www.linkedin.com/in/kajal-rajput-a90039239">
              LinkedIn
            </a>
            <br></br>
            <a href="https://github.com/Kajal-Rajput-05">GitHub</a>
            <pre>Email:krajput@gmail.com</pre>
            <p>8787867790</p>
          </Card.Body>
        </Card>
      </Row>
      </Container>
      <h3>Address:Cdac Kharghar,Mumbai</h3>

      <footer className="footer">
        <div className="footer-info">
          <div className="footer-info-item">
            <FaMapMarker /> Mumbai
          </div>
          <div className="footer-info-item">
            <FaEnvelope /> example@example.com
          </div>
          <div className="footer-info-item">
            <FaPhone /> +1234567890
          </div>
        </div>
        <p className="footer-address">Cdac Kharghar, Mumbai</p>
      </footer>
    
    </>
  );
}
