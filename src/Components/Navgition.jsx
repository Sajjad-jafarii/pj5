import React from 'react'

function Navgition() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        
        <a className="navbar-brand" href="#home">
            <img src="public/logo.png" alt="header-Logo" className="logo"/></a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText">
            <span className="icon-bar"><i className="fa fa-bars fa-2x"></i></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarText">
           
            <ul className="navbar-nav ml-auto line">
                <li className="nav-item">
                    <a className="nav-link" href="#home" data-scroll-nav="0">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about" data-scroll-nav="1">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#services" data-scroll-nav="2">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#portfolio" data-scroll-nav="3">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#team" data-scroll-nav="4">Team</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#price" data-scroll-nav="5">Price</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#blog" data-scroll-nav="6">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact" data-scroll-nav="7">Contact</a>
                </li>
            </ul>
         
        </div>
        
    </nav>
    </div>
  )
}

export default Navgition
