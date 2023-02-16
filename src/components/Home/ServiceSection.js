import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Service = () => {

    return (
        <div id="services" className="services-area pt-120 pb-100" style={{'background-image': 'url(assets/img/bg/bg-1.jpg)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                        <div className="section-title text-center ml-50 mr-50 mb-80">
                            <span className="border-left-1"></span>
                            <span>what we do</span>
                            <span className="border-right-1"></span>
                            <h1>We provide exclusive services for your business</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                <img src="assets/img/icon/icon-01.png" alt="" />
                            </div>
                            <div className="services-text">
                                <h3>Enterprise Low-code</h3>
                                <p>We help you adopt low-code strategy for “Accelerating Application Development” for your organisational needs</p>
                                <a href="#consult"> <span className="services-button">know more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                <img src="assets/img/icon/icon-2.png" alt="" />
                            </div>
                            <div className="services-text">
                                <h3>Modern Data Stack</h3>
                                <p>We help you upgrade your data-stack to create/harness Analytics Powerhouse and win over competition</p>
                                <a href="#consult"> <span className="services-button">know more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                <img src="assets/img/icon/icon-3.png" alt="" />
                            </div>
                            <div className="services-text">
                                <h3>Cloud Engineering</h3>
                                <p>We help you in migrating your workloads to cloud while optimising both performance and cost for scale</p>
                                <a href="#consult"> <span className="services-button">know more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                               
                                <img src="assets/img/icon/icon-5.png" alt="" />
                            </div>
                            <div className="services-text">
                                <h3>DevOps & Platforms</h3>
                                <p>We help you with our expertise in DevOps and platform engineering while you focus on the product development</p>
                                <a href="#consult"> <span className="services-button">know more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                            <img src="assets/img/icon/icon-4.png" alt="" />
                            </div>
                            <div className="services-text">
                                <h3>AI Enablement</h3>
                                <p>We help you in harnessing power of Artificial Intelligence for your business by deploying AI/ML models to production </p>
                                <a href="#consult"> <span className="services-button">know more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                <img src="assets/img/icon/p-3.png" alt="" />
                            </div>
                            <div className="services-text">
                                <h3>Product Teams</h3>
                                <p>We help you by creating customised team offering which can be ramped up/down as per the product roadmap. </p>
                                <a href="#consult"> <span className="services-button">know more <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
