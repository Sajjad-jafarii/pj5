import React from 'react'

function Counts() {
  return (
    
      
    <section className="counts padding">
        <div className="container">

            
            <div className="counts-c text-center">

                <div className="row">
                   
                    <div className="count-item col-lg-3 col-md-6 col-sm-6 mx-auto">
                        <div className="counter">
                            <div className="counting-icon">
                                <i className="fa fa-code fa-2x"></i>
                            </div>
                            
                            <span className="count" data-from="0" data-to="300">0</span>
                           
                            <h4>Our Customers</h4>
                        </div>
                    </div>
                    
                    <div className="count-item col-lg-3 col-md-6 col-sm-6 mx-auto">
                        <div className="counter">
                            <div className="counting-icon">
                                <i className="fa fa-coffee fa-2x"></i>
                            </div>
                            
                            <span className="count" data-from="0" data-to="150">0</span>
                         
                            <h4>happy clients</h4>
                        </div>
                    </div>
                    
                    <div className="count-item col-lg-3 col-md-6 col-sm-6 mx-auto">
                        <div className="counter">
                            <div className="counting-icon">
                                <i className="fa fa-lightbulb-o fa-2x"></i>
                            </div>
                            
                            <span className="count" data-from="0" data-to="115">0</span>
                          
                            <h4>Project Completed</h4>
                        </div>
                    </div>
                  
                    <div className="count-item col-lg-3 col-md-6 col-sm-6 mx-auto">
                        <div className="counter">
                            <div className="counting-icon">
                                <i className="fa fa-trophy fa-2x"></i>
                            </div>
                            
                            <span className="count" data-from="0" data-to="20">0</span>
                          
                            <h4>Awards</h4>
                        </div>
                    </div>
                 

                </div>
            </div>
           

        </div>
        
    </section>
   
  )
}

export default Counts
