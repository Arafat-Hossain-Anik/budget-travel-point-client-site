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
            <img src="http://themescare.com/demos/peulis-v6/assets/img/about.jpg" alt="" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={8}>
            <img src="https://image.freepik.com/free-photo/woman-holding-map-pointing-finger-sitting-with-her-boyfriend-taking-pic-camera-park_23-2147841571.jpg" alt="" />
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
            <img src="https://image.freepik.com/free-photo/close-up-shot-smiling-fashionably-dressed-blonde-woman-posing-with-camera_181624-40390.jpg" alt="" />
          </Col>
        </Row>
      </Container>
      <div className="text-center p-5">
        <h3>Destinations</h3>
        <p> A place to which one is journeying or to which something is sent when the package has reached its destination kept their destination secret. <br />A place of interest where tourists visit, typically for its inherent or an exhibited natural or cultural value, historical significance, natural or built beauty, offering leisure and amusement.</p>
        <Container>
          <Row>
            <Col>
              <Carousel className='part1 caru'>
                <Carousel.Item interval={1000}>
                  <img
                    className=""
                    src="https://image.freepik.com/free-photo/firework-display-singapore_335224-608.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption className='car'>
                    <h2><span style={{ fontWeight: 'bold', color: 'chocolate' }}>S</span>INGAPORE</h2>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className=" "
                    src="https://image.freepik.com/free-photo/woman-wearing-japanese-traditional-kimono-with-umbrella-yasaka-pagoda-sannen-zaka-street-kyoto-japan_335224-143.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption className='car'>
                    <h2><span style={{ fontWeight: 'bold', color: 'chocolate' }}>J</span>APAN</h2>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className=" "
                    src="https://image.freepik.com/free-photo/shanghai-skyline-sunny-day-china_1127-2920.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption className='car'>
                    <h2><span style={{ fontWeight: 'bold', color: 'chocolate' }}>C</span>HINA</h2>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className=" "
                    src="https://image.freepik.com/free-photo/amazing-shot-louvre-paris-france_181624-43427.jpg"
                    alt="Fourth slide"
                  />
                  <Carousel.Caption className='car'>
                    <h2><span style={{ fontWeight: 'bold', color: 'chocolate' }}>F</span>RANCE</h2>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col>
              <Carousel className='part1 caru'>
                <Carousel.Item interval={1000}>
                  <img
                    className=""
                    src="https://www.thesatourism.com/wp-content/uploads/2017/01/Sajek-valley-1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption className='car'>
                    <h2>SAJEK VALLEY -<span style={{ fontWeight: 'bold', color: 'chocolate' }}>BD</span></h2>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className=" "
                    src="https://lenews.ch/wp-content/uploads/2021/05/Italy_%C2%A9-Xantana-_-Dreamstime.com_.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption className='car'>
                    <h2><span style={{ fontWeight: 'bold', color: 'chocolate' }}>I</span>TALY</h2>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className=" "
                    src="https://media-cdn.tripadvisor.com/media/photo-c/2560x500/10/e2/f8/43/longest-sea-beach-in.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption className='car'>
                    <h2>COX'<span style={{ fontWeight: 'bold', color: 'chocolate' }}>S</span> BAZAR</h2>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className=" "
                    src="https://www.zambianguardian.com/wp-content/uploads/2021/09/Scope-of-public-administration-in-India.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption className='car'>
                    <h2>TAJ MAHAL -<span style={{ fontWeight: 'bold', color: 'chocolate' }}>INDIA</span></h2>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;