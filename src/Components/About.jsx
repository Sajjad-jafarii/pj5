import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function About({ title = "About Us", subtitle = "Become best of you", children }) {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.example.com/about')
      .then(response => {
        console.log("About data fetched:", response.data);
        setAboutData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching About data:", error);
        setLoading(false);
      });
  }, []);

  if (loading || !aboutData) return <p>Loading...</p>;

  return (
    <section className="about padding" id="about" data-scroll-index="1">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 about-image mb-5">
            <img src={aboutData.image || "public/about.png"} alt="About" />
          </div>

          <div className="col-lg-6 about-content">
            <div className="hr-title">
              <h2 className="heading-primary mb-2">{title}</h2>
              <div className="headerhr"></div>
            </div>
            <h3 className="heading-tertiary mt-3 mb-3">{subtitle}</h3>

            <p className="mb-3">{aboutData.description1 || "Default description 1"}</p>
            <p className="mb-5">{aboutData.description2 || "Default description 2"}</p>

            <Link to="/about/details" className="button btn-hover mt-3">
              Read More &rarr;
            </Link>

            <div className="mt-4">
              {children}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
