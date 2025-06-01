import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // فرض: API شما لیستی از خدمات برمی‌گرداند
    axios.get('https://example.com/api/services')
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="about-list padding">
      <div className="container">
        <div className="row">

          <div className="text-center">
            <h2 className="heading-primary mb-5">Our <span>Creative</span></h2>
            <p className="mb-3">Lorem Ipsum is simply dummy text of the printing and type setting
              industry...</p>
          </div>

          {services.map((service, index) => (
            <div className="about-item col-lg-4 col-md-6 mx-auto p-0 mt-5" key={index}>
              <div className="text-center">
                <i className={`icon fa ${service.icon} fa-2x`}></i>
                <h5>{service.title}</h5>
                <h6>{service.subtitle}</h6>
                <p>{service.description}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default AboutList;
