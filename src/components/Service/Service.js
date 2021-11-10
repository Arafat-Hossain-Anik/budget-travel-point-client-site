import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Service = (props) => {
    const { service } = props;
    const { addToCart } = useAuth()
    return (
        <div key={service.id}>
            <div className="col">
                <div className="card">
                    <Link className='more-img' to={`/more/${service._id}`}>
                        <img className="card-img-top" src={service.img} alt="" />
                    </Link>

                    <div className="card-body">
                        <h3 className="card-title fw-bold">{service.name}</h3>
                        <p className="card-text"><small>{service.description}</small></p>
                        <Container>
                            <Row>
                                <Col><p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></p></Col>
                                <Row> <Col><p className=" fw-bold"><i className="fas fa-clock"></i> {service.time}</p></Col>
                                    <Col className='star-icon'><p className=" fw-bold"><i className="fas fa-dollar-sign"></i> {service.price}.00</p></Col>
                                </Row>

                            </Row>
                            <Row><hr /></Row>
                            <Row className='booking'>
                                <Col><button onClick={() => addToCart(service)}><i className="far fa-flag"></i> Booking Now</button></Col>
                                <Col className='details-btn'> <Link to={`/more/${service._id}`}>
                                    <button>View Details <i className="fas fa-info-circle"></i></button>
                                </Link></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;