import React from 'react'

function Portfolio() {
  return (
    <div>
      
    <section className="portfolio padding" id="portfolio" data-scroll-index="3">
        <div className="container-fluid">

           
            <div className="port-title text-center text-white">
                <h2 className="heading-primary mb-5">Portfolio</h2>
                <p className="text-white mb-5">Lorem Ipsum is simply dummy text of the printing and type setting
                    industry when an unknown printer took a galley of type and scrambled it to make a type specimen
                    book It has survived not only five centuries.</p>
            </div>
            


            
            <nav>
                <ul className="simplefilter filter-port">
                    <li className="btn active button btn-hover" data-filter="all">All</li>
                    <li className="btn button btn-hover" data-filter="1">Brand</li>
                    <li className="btn button btn-hover" data-filter="2">Design</li>
                    <li className="btn button btn-hover" data-filter="3">Graphic</li>
                </ul>
            </nav>
           

            <div className="row">
               =
                <div className="filtr-container">

                   
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="1">
                        <div className="port-caption">
                           
                            <img src="public/portfolio/portfolio-01.jpg" alt="portfolio-01" />
                            
                            <div className="overlay">
                                <div className="info-content">
                                    <h4>Creative Portfolio</h4>
                                    <p>Branding &#8739; Logo</p>
                                </div>
                                <div className="view-more">
                                    <a className="modal-image" href="public/portfolio/portfolio-01.jpg">
                                        <i className="fa fa-search fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="3">
                        <div className="port-caption">
                            
                            <img src="public/portfolio/portfolio-02.jpg" alt="portfolio-02" />
                            
                            <div className="overlay">
                                <div className="info-content">
                                    <h4>Creative Portfolio</h4>
                                    <p>Branding &#8739; Logo</p>
                                </div>
                                <div className="view-more">
                                    <a className="modal-image" href="public/portfolio/portfolio-02.jpg">
                                        <i className="fa fa-search fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="1">
                        <div className="port-caption">
                          
                            <img src="public/portfolio/portfolio-03.jpg" alt="portfolio-03" />
                           
                            <div className="overlay">
                                <div className="info-content">
                                    <h4>Creative Portfolio</h4>
                                    <p>Branding &#8739; Logo</p>
                                </div>
                                <div className="view-more">
                                    <a className="modal-image" href="public/portfolio/portfolio-03.jpg">
                                        <i className="fa fa-search fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="2">
                        <div className="port-caption">
                            
                            <img src="public/portfolio/portfolio-04.jpg" alt="portfolio-04" />
                          
                            <div className="overlay">
                                <div className="info-content">
                                    <h4>Creative Portfolio</h4>
                                    <p>Branding &#8739; Logo</p>
                                </div>
                                <div className="view-more">
                                    <a className="modal-image" href="public/portfolio/portfolio-04.jpg">
                                        <i className="fa fa-search fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="3">
                        <div className="port-caption">
                            
                            <img src="public/portfolio/portfolio-05.jpg" alt="portfolio-05" />
                            
                            <div className="overlay">
                                <div className="info-content">
                                    <h4>Creative Portfolio</h4>
                                    <p>Branding &#8739; Logo</p>
                                </div>
                                <div className="view-more">
                                    <a className="modal-image" href="public/portfolio/portfolio-05.jpg">
                                        <i className="fa fa-search fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 filtr-item" data-category="1">
                        <div className="port-caption">
                           
                            <img src="public/portfolio/portfolio-06.jpg" alt="portfolio-06" />
                           
                            <div className="overlay">
                                <div className="info-content">
                                    <h4>Creative Portfolio</h4>
                                    <p>Branding &#8739; Logo</p>
                                </div>
                                <div className="view-more">
                                    <a className="modal-image" href="public/portfolio/portfolio-06.jpg">
                                        <i className="fa fa-search fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    </div>
  )
}

export default Portfolio
