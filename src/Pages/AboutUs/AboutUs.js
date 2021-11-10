import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <div>
        <h2 className=' mt-5 mb-5 text-center fw-bold '>ABOUT US </h2>
      </div>
      <Container style={{ padding: '20px' }}>
        <Row>
          <Col>
            <h3 style={{ fontWeight: 'bold' }}>Who We Are</h3>
            <p>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip. <br /> Printer took a galley of type and scrambled it to make a type speci menu book. It has survived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanget was popularised.</p>
          </Col>
          <Col className='founder'>
            <img className='img-fluid' src="http://themescare.com/demos/peulis-v6/assets/img/about.jpg" alt="" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={8}>
            <img className='img-fluid' src="https://image.freepik.com/free-photo/woman-holding-map-pointing-finger-sitting-with-her-boyfriend-taking-pic-camera-park_23-2147841571.jpg" alt="" />
          </Col>
          <Col sm={4}>
            <h3 className='pt-5'>Our Story</h3>
            <p>The narrator isn't describing a static place but a world in motion. Or the image compels your eyes to move all over, rendering the story through the interplay of subject and background. And this movement isn't limited to physical movement, but a sense of temporality, or time itself moving.</p>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col sm={4}>
            <h3 className='pt-5'>Our Value</h3>
            <p>If vacation is an escape from real life, then we propose that the real value of travel is about much more than taking vacation. <br />
              To us, intentional travel has changed our lives. (When we first became digital nomads, we essentially gave up vacations. This is because we can work and travel at the same time. It’s also because our every day lives don’t require an “escape” to stay sane.)</p>
          </Col>
          <Col sm={8}>
            <img className='img-fluid' src="https://image.freepik.com/free-photo/close-up-shot-smiling-fashionably-dressed-blonde-woman-posing-with-camera_181624-40390.jpg" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;