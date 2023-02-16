import React from 'react';

const About = () => {

    return (
        <div id="about" className="about-area pt-130 pb-100">
            <div className="container">   
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="about-text">
                            <span>what we do</span>
                            <h1>Accelerating your <br></br> <span>Enterprise Application</span> Development</h1>
                            <p></p>
                            <a href="#">Our Services</a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="about-img">
                            <img src="assets/img/about/about.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="about-content">
                            <p>Established in 2013, Dezyne Technologies is an IT Services and Consultancy company.

With over 50+ years of collective experience in the team (Worked with Global organizations like STMicroelectronics Pvt Ltd, Synopsis Pvt Ltd, Conexant Systems, Cadence Design Systems Pvt Ltd and, NEC Technologies to name a few).

We specialize into providing elegant and intuitive solution in the areas of Mobile Application Development, Web Application Development, Cloud Solutions, IoT Solutions, Embedded System Design and Data Analytics.</p>
                            <div className="about-1-img">
                                <img src="assets/img/about/01.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
    
}

export default About;