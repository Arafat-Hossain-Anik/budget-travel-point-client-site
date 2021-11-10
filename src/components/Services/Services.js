import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setOurServices] = useState([])
    useEffect(() => {
        fetch('https://quiet-lake-52028.herokuapp.com/services')
            .then(result => result.json())
            .then(data => setOurServices(data))
    }, [])
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 px-4 py-4 gy-4" >
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </>

    );
};

export default Services;