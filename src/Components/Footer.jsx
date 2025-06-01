import React from 'react'

function Footer() {
  return (
    <div>
      
    <section className="footer padding">
        <div className="container"/>
            <div className="row">
                
                <div className="col-lg-4 col-md-6 mb-sm-5 mb-3">
                    <h3 className="heading-tertiary mb-3">Multimax</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quos ipsa, soluta eum itaque nobis
                        quas sunt suscipit aliquid.</p>
                </div>
                
                <div className="col-lg-2 col-md-6 mb-sm-5 mb-3">
                    <h3 className="heading-tertiary mb-3">Quick Links</h3>
                    <ul>
                        <li><i className="fa fa-angle-double-right"></i>
                            <a href="#0">Blog</a>
                        </li>
                        <li><i className="fa fa-angle-double-right"></i>
                            <a href="#0">About Us</a>
                        </li>
                        <li><i className="fa fa-angle-double-right"></i>
                            <a href="#0">Our story</a>
                        </li>
                        <li><i className="fa fa-angle-double-right"></i>
                            <a href="#0">Forum</a>
                        </li>
                    </ul>
                </div>
               
                <div className="col-lg-2 col-md-6 mb-sm-5 mb-3">
                    <h3 className="heading-tertiary mb-3">Support</h3>
                    <ul>
                        <li><i className="fa fa-angle-double-right"></i>
                            <a href="#0">FAQ'S</a>
                        </li>
                        <li><i className="fa fa-angle-double-right"></i>
                            <a href="#0">Privacy</a>
                        </li>
                        <li><i className="fa fa-angle-double-right"></i>
                            <a href="#0">Policy</a>
                        </li>
                        <li><i className="fa fa-angle-double-right"></i>
                            <a href="#0">Support</a>
                        </li>
                        <li><i className="fa fa-angle-double-right"></i>
                            <a href="#0">Documetation</a>
                        </li>
                    </ul>
                </div>
              
                <div className="col-lg-4 col-md-6 mb-sm-5 mb-3">
                    <h3 className="heading-tertiary mb-3">Subscribe to our Newsletter</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Id nobis
                        quas sunt suscipit aliquid.</p>
                    <form className="form mt-3">
                        <div className="form-check mb-3"> <label className="form-check-label"> <input type="checkbox" name="checkbox"/>
                                <small>Yes, I would like to receive communications by email.
                                </small></label>
                        </div>
                        <div className="input-group">
                            <input name="email" type="email" className="form-control" placeholder="Enter your email"
                                required/>
                            <button className="btn" type="submit"><i className="fa fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
                

                <hr className="clearfix w-100 color-dark"/>

               
                <div className="offset-md-3 col-md-6 offset-md-3">

                    
                    <div className="social-links">
                        <ul>
                            <li><a href="#0"><i className="fa fa-facebook fa-fw"></i></a></li>
                            <li><a href="#0"><i className="fa fa-twitter fa-fw"></i></a></li>
                            <li><a href="#0"><i className="fa fa-linkedin fa-fw"></i></a></li>
                            <li><a href="#0"><i className="fa fa-pinterest-p fa-fw"></i></a></li>
                            <li><a href="#0"><i className="fa fa-instagram fa-fw"></i></a></li>
                        </ul>
                    </div>
                    
                    <div className="copyright">
                        <h5> &copy; Your Company Name 2019 | All Rights Reserved. Designed by <a href="https://gecdesigns.com/"
                                target="_blank">GEC Designs</a></h5>
                    </div>
                  
                </div>
                
            </div>
    </section>
    </div>
  )
}

export default Footer
