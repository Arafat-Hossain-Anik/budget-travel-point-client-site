import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Service = (props) => {
    const { service } = props;
    const { addToCart } = useAuth()
    return (
        // <div key={service.id}>
        //     <div className="col">
        //         <div className="card">
        //             <Link className='more-img' to={`/more/${service._id}`}>
        //                 <img className="card-img-top" src={service.img} alt="" />
        //             </Link>

        //             <div className="card-body">
        //                 <h3 className="card-title fw-bold">{service.name}</h3>
        //                 <p className="card-text"><small>{service.description}</small></p>
        //                 <Container>
        //                     <Row>
        //                         <Col><p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></p></Col>
        //                         <Row> <Col><p className=" fw-bold"><i className="fas fa-clock"></i> {service.time}</p></Col>
        //                             <Col className='star-icon'><p className=" fw-bold"><i className="fas fa-dollar-sign"></i> {service.price}.00</p></Col>
        //                         </Row>

        //                     </Row>
        //                     <Row><hr /></Row>
        //                     <Row className='booking'>
        //                         <Col><button onClick={() => addToCart(service)}><i className="far fa-flag"></i> Booking Now</button></Col>
        //                         <Col className='details-btn'> <Link to={`/more/${service._id}`}>
        //                             <button>View Details <i className="fas fa-info-circle"></i></button>
        //                         </Link></Col>
        //                     </Row>
        //                 </Container>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="col">
            <div className="card h-100">
                {/* course image */}
                <Link className='more-img' to={`/more/${service._id}`}>
                    <img src={service.img} className="card-img-top" alt="PhoneImage" />
                </Link>
                <div className="card-body text-start">
                    {/* course details */}
                    <h5 className="card-title fw-bold">{service.name}</h5>
                    <p className="card-text"><small>{service.description}</small></p>
                    <Row>
                        <Col>
                            <span className='fw-bold'>Ratings: </span>
                            <Rating placeholderRating={service.rating}
                                emptySymbol={<i className="far fa-star"></i>}
                                placeholderSymbol={<i className="fas fa-star"></i>}
                                fullSymbol={<i className="fas fa-star"></i>}
                                readonly
                            />
                        </Col>
                        <Col>
                            <p className=" fw-bold">Price: <i className="fas fa-dollar-sign"></i> {service.price}.00</p>
                        </Col>
                    </Row>
                </div>
                {/* enroll btn section */}
                <div className="mb-3 mx-2">
                    <hr />
                    <Row className='booking'>
                        <Col><button onClick={() => addToCart(service)}><i className="far fa-flag"></i> Booking Now</button></Col>
                        <Col className='details-btn text-center'> <Link to={`/more/${service._id}`}>
                            <button className=''>Buy Now <i className="fas fa-info-circle"></i></button>
                        </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Service;