import React from 'react'

function Header() {
  return (
    <div>
      <header className="home" id="home" data-scroll-index="0">
        <div className="container">
            <div className="row">

                
                <div className="col-lg-6 d-flex justify-content-md-center mx-auto">
                    <div className="hero-content">
                        <div className="content">
                            <h1 className="title mt-5">
                                Creative Agency
                            </h1>
                            <p className="subtitle">
                                Effects present letters inquiry no an removed or friends. Desire behind
                                latter me though in. Supposing
                                shameless am engrossed additions.
                            </p>
                            <a href=" #0" className="button btn-hover">Discover
                                Us<i className="fa fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-lg-6 order-first order-lg-last d-flex justify-content-md-center">
                    <div className="public/hero-png">
                        <img className="img-fluid full-img" src="public/hero.png" alt="header-right-image" />
                    </div>
                </div>
                

            </div>
        </div>
    </header>
    </div>
  )
}

export default Header
